terraform {
  required_version = ">= 1.5"
}

resource "null_resource" "observability_stack" {
  triggers = {
    name = "observability-stack"
  }
}
