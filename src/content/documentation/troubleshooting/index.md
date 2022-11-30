---
title: Troubleshooting
---

# Troubleshooting

If the installation fails or never ends, here a few things to check.

## Cannot execute the `nuv` executable on Mac OSX

On Mac, downloaded binaries from third party developerse are sometimes quarantined.

To allow execution of the `nuv` binary after unpacking execute:

```
xattr -d com.apple.quarantine nuv
```

## Check the status of the installation

Run `kubectl -n nuvolaris get po`, you should see something like this:

```
NAME                          READY   STATUS      RESTARTS   AGE
nuvolaris-operator            1/1     Running     0          7h39m
controller-66c6b48bcb-vk6fv   1/1     Running     0          7h38m
wsk-prewarm-nodejs14          0/1     Completed   0          7h38m
wsk-prewarm-python37          0/1     Completed   0          7h38m
couchdb-0                     1/1     Running     0          7h38m
redis-0                       1/1     Running     0          7h38m
couchdb-init-dv664            0/1     Completed   0          7h38m
wsk0-48-prewarm-nodejs14      1/1     Running     0          7m28s
```

If you are using an Ubuntu image, use `sudo microk8s kubectl` instead of `kubectl`

## Check the API host has been return properly

Run `kubectl -n nuvolaris get cm/config -o yaml`, you should see something like this:

```
apiVersion: v1
kind: ConfigMap
metadata:
  annotations:
    apihost: https://ec2-18-191-242-88.us-east-2.compute.amazonaws.com
    kubectl.kubernetes.io/last-applied-configuration: |
      {"apiVersion":"v1","kind":"ConfigMap","metadata":{"annotations":{},"name":"config","namespace":"nuvolaris"}}
  name: config
  namespace: nuvolaris
```

## Check you have a `.nuvolaris/.wskpros` in your home directory

This is the file used to access to Nuvolaris.

It should look like this:

```
AUTH=8c059563-be75-4b39-a725-769304701a6f:CoIM5TNkbX35dTiLLJnrBb72XT7vDHSSAp1GY1PfpMkUGlSxaEnPFHNacF8HJLBn
APIHOST=http://ec2-19-181-212-78.us-east-2.compute.amazonaws.com
```

## If there is only the operator running

Check the logs of the operator with:

```
kubectl -n nuvolaris logs pod/nuvolaris-operator
```

Then [open an issue reporting the logs](https://github.com/nuvolaris/nuvolaris-cli)

## Uninstall

You can uninstall Nuvolaris with:

```
./nuv setup --uninstall=<kubernetes-context>
```

Remember also to remove the `~/.nuvolaris` folder from your home directory or it will retry the same parameters.
