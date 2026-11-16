terraform {
  required_version = ">= 1.5"
}

resource "null_resource" "ci_pipelines" {
  triggers = {
    name = "ci-pipelines"
  }
}
