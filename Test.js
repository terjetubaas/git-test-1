function sum(...values) {
  values.reduce((sum, value) => sum + value, 0)
}