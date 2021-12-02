alias erake="bundle exec rake"
alias migrate="erake db:migrate"
alias schema-load="erake db:schema:load"

rollback() {
  node exe-scripts/rollback.js $*
}
