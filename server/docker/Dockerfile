FROM ruby:3.2.2

WORKDIR /server
COPY Gemfile /server/Gemfile
COPY Gemfile.lock /server/Gemfile.lock
RUN bundle install

COPY ./docker/entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0"]