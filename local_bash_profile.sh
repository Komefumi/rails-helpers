alias migrate="bundle exec rake db:migrate"

rollback() {
  node exe-scripts/rollback.js $*
}
