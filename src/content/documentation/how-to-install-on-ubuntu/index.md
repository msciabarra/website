---
title: Install on Ubuntu
---

# Installing Nuvolaris in an Ubuntu instance

As a prerequisite you need:

- an Ubuntu Instance, at least version 20 (with snap pre-installed)
- at least 4GB of memory, 30 gb of disk space
- ssh and sudo access to the instance
- firewall opened for port 80 and 443
- the `<public-dns-name>` of the instance, or at least a public IP address

**NOTE** if you do not have a public DNS name for your virtual machine but only an IP address, you can use `nip.io` to get one. If you IP address is `1.2.3.4` then you can use `1-2-3-4.nip.io` as a `<public-dns-name>`.

Use ssh to log into the instance, according the instructions of your cloud provider.

## Install MicroK8s

First, let's install `microk8s` with `snap` and give access to our user to `microk8s:

```
sudo snap install microk8s --classic
sudo microk8s enable hostpath-storage ingress dns
sudo usermod -a -G microk8s ubuntu
newgrp microk8s
```

Now get the `kubectl` tool and and the configuration:

```
mkdir ~/.kube
microk8s kubectl config >~/.kube/config
microk8s kubectl get nodes
```

You should get an output like this (versions and names can be different):

```
NAME               STATUS   ROLES    AGE   VERSION
ip-172-31-21-189   Ready    <none>   70m   v1.24.0-2+59bbb3530b6769
```

If you see `NotReady` wait a bit and try again until the node is `Ready`, it can take up to one minute.

## Installing Nuvolaris

Now you are ready to install Nuvolaris.

Copy the `<url-address>` of the latest version of the installer [from this page](/download).

Then download and unpack it (replace `<url-address>` with the actual URL address):

```
curl -sL <url-address> | tar xzvf -
sudo install nuv /usr/local/bin/nuv
nuv -v
```

If the download and the installation went ok, you should see the version number of the installer.

Now you can install Nuvolaris.

For Microk8s instances you do not have generally a load balancer configured so you need to provide the `<public-dns-name>` of the instance. It is generally the same you used to access the instance itself.

Also you need the name of the `<kubernetes-context>` to use. You can have more contexts to access multiple Kubernetes at the same time. With Microk8s there should have be only one and it is named `microk8s`.

You can see the available contexts with the command `kubectl config get-contexts`.

Once you collected the informations you need you can install it with:

```
nuv setup --context=<kubernetes-context> --apihost=<public-dns-name>
```

The installation can take a few minutes to complete, mostly because a number of large Docker images must be downloaded.

If you ware curious, you can check what is happening on the Kubernetes cluster running (in another terminal) the command `watch kubectl -n nuvolaris get po,svc`.

If something goes wrong, please check the [troubleshooting](troubleshooting) page.

### Accessing the serverless environment remotely

Now that your serverless environemnt is ready you can access it from anywhere, using the configured `apihost` and `auth` key.

Type `nuv wsk proerty get`. It will show something like this:

```
whisk API host		<apihost>
whisk auth		    <auth>
whisk namespace		nuvolaris
whisk API version	v1
whisk CLI version	v0.2.0-trinity.22061015
whisk API build		2021-12-29T12:28:02+0000
whisk API build number	67b3e50
```

Take note of the values `<apihost>` and `<auth>` as you wil need it to access your serverless environment remotely.

Now you can [download](/download) the `nuv` tool elsewhere, and connect to your serverless environment with:

```
nuv wskprops --apihost=<apihost> --auth=<auth>
```
