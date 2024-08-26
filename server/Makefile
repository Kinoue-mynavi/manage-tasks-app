start-ctn:
	docker compose up -d

stop-ctn:
	docker compose down

build-ctn:
	docker compose build

routes:
	docker compose exec app rails routes

bundle:
	docker compose exec app bundle install

migrate:
	docker compose exec app rails db:migrate