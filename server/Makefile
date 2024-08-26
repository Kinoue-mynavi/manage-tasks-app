start-c:
	docker compose up -d

stop-c:
	docker compose down

build-c:
	docker compose build

routes:
	docker compose exec app rails routes

bundle:
	docker compose exec app bundle install

migrate:
	docker compose exec app rails db:migrate