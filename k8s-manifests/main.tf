terraform {
  required_version = ">= 1.5"
}

resource "null_resource" "k8s_manifests" {
  triggers = {
    name = "k8s-manifests"
  }
}
