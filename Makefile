CONTAINER_NAME=matheusrabelo
PWD=$(shell pwd)
APPDIR=/app
PORT=8000
CURRENT_TIMESTAMP=$(shell date +%Y%m%d%H%M%S)
MUID=$(shell id -u)
MGID=$(shell id -g)

build-dev:
	docker build . -t $(CONTAINER_NAME):latest \
		--build-arg	MUID=$(MUID) --build-arg MGID=$(MGID) --target development

run-dev:
	docker run --rm -it \
		-e APP_PORT=$(PORT) \
		-v $(PWD):$(APPDIR):delegated \
		--network="host" --name $(CONTAINER_NAME) $(CONTAINER_NAME)

exec-dev:
	docker exec -it $(CONTAINER_NAME) bash

stop-dev:
	docker stop $(CONTAINER_NAME)
