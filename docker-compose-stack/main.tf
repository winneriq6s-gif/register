terraform {
  required_version = ">= 1.5"
}

resource "null_resource" "docker_compose_stack" {
  triggers = {
    name = "docker-compose-stack"
  }
}
