terraform {
  required_version = ">= 1.5"
}

resource "null_resource" "infra_terraform" {
  triggers = {
    name = "infra-terraform"
  }
}
