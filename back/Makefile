test:
	docker compose run --entrypoint "poetry run pytest --asyncio-mode=auto" demo-app
lint:
	docker compose run --entrypoint "poetry run pylint '**/*.py'" demo-app
install-%:
	docker compose exec demo-app poetry add ${@:install-%=%}
uninstall-%:
	docker compose exec demo-app poetry remove ${@:uninstall-%=%}
