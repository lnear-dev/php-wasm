#!/usr/bin/env make

LIBZIP_TAG?=v1.10.1
DOCKER_RUN_IN_LIBZIP =${DOCKER_ENV} -e C_FLAGS="-fPIC -flto -O${SUB_OPTIMIZE}" -w /src/third_party/libzip/ emscripten-builder
DOCKER_RUN_IN_EXT_ZIP =${DOCKER_ENV} -e C_FLAGS="-fPIC -flto -O${SUB_OPTIMIZE}" -w /src/third_party/php-zip/ emscripten-builder

ifeq ($(filter ${WITH_LIBZIP},0 1 shared static),)
$(error WITH_LIBZIP MUST BE 0, 1, static OR shared. PLEASE CHECK YOUR SETTINGS FILE: $(abspath ${ENV_FILE}))
endif

ifeq (${WITH_LIBZIP},1)
WITH_LIBZIP=static
endif

ifeq (${WITH_LIBZIP},static)
ARCHIVES+= lib/lib/libzip.a
CONFIGURE_FLAGS+= --with-zip
TEST_LIST+=$(shell ls packages/libzip/test/*.mjs)
endif

ifeq (${WITH_LIBZIP},shared)
# CONFIGURE_FLAGS+= --with-zip
# SHARED_LIBS+= packages/libzip/libzip.so
PHP_CONFIGURE_DEPS+= packages/libzip/libzip.so
TEST_LIST+=$(shell ls packages/libzip/test/*.mjs)
SKIP_LIBS+= -lzip
PHP_ASSET_LIST+= libzip.so php-zip.so
endif

third_party/libzip/.gitignore:
	@ echo -e "\e[33;4mDownloading LibZip\e[0m"
	${DOCKER_RUN} git clone https://github.com/nih-at/libzip.git third_party/libzip \
		--branch ${LIBZIP_TAG} \
		--single-branch     \
		--depth 1;

lib/lib/libzip.a: third_party/libzip/.gitignore lib/lib/libz.a
	@ echo -e "\e[33;4mBuilding LibZip\e[0m"
	${DOCKER_RUN_IN_LIBZIP} emcmake cmake . \
		-DCMAKE_INSTALL_PREFIX=/src/lib/ \
		-DZLIB_LIBRARY=/src/lib/lib/libz.a \
		-DZLIB_INCLUDE_DIR=/src/lib/include/ \
		-DCMAKE_BUILD_TYPE=Release \
		-DCMAKE_C_FLAGS="-fPIC -O${SUB_OPTIMIZE}"
	${DOCKER_RUN_IN_LIBZIP} emmake make -ej${CPU_COUNT}
	${DOCKER_RUN_IN_LIBZIP} emmake make install;

lib/lib/libzip.so: lib/lib/libzip.a
	${DOCKER_RUN_IN_LIBZIP} emcc -shared -o /src/$@ -fPIC -flto -sSIDE_MODULE=1 -O${SUB_OPTIMIZE} -Wl,--whole-archive /src/$^

packages/libzip/libzip.so: lib/lib/libzip.so
	cp -Lp $^ $@

$(addsuffix /libzip.so,$(sort ${SHARED_ASSET_PATHS})): packages/libzip/libzip.so
	cp -Lp $^ $@

third_party/php-zip/config.m4: third_party/php${PHP_VERSION}-src/patched
	${DOCKER_RUN} cp -Lprf /src/third_party/php${PHP_VERSION}-src/ext/zip /src/third_party/php-zip

packages/libzip/php-zip.so: ${PHPIZE} packages/libzip/libzip.so third_party/php-zip/config.m4
	${DOCKER_RUN_IN_EXT_ZIP} chmod +x /src/third_party/php${PHP_VERSION}-src/scripts/phpize;
	${DOCKER_RUN_IN_EXT_ZIP} /src/third_party/php${PHP_VERSION}-src/scripts/phpize;
	${DOCKER_RUN_IN_EXT_ZIP} emconfigure ./configure PKG_CONFIG_PATH=${PKG_CONFIG_PATH} --prefix=/src/lib/ --with-php-config=/src/lib/bin/php-config;
	${DOCKER_RUN_IN_EXT_ZIP} sed -i 's#-shared#-static#g' Makefile;
	${DOCKER_RUN_IN_EXT_ZIP} sed -i 's#-export-dynamic##g' Makefile;
	${DOCKER_RUN_IN_EXT_ZIP} emmake make -j${CPU_COUNT} EXTRA_INCLUDES='-I/src/third_party/php8.3-src';
	${DOCKER_RUN_IN_EXT_ZIP} emcc -shared -o /src/$@ -fPIC -flto -sSIDE_MODULE=1 -O${SUB_OPTIMIZE} -Wl,--whole-archive .libs/zip.a /src/packages/libzip/libzip.so

$(addsuffix /php-zip.so,$(sort ${SHARED_ASSET_PATHS})): packages/libzip/php-zip.so
	cp -Lp $^ $@
