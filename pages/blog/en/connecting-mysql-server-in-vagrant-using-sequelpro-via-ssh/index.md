---
title: Connecting MySQL Server in Vagrant using SequelPro via SSH
lang: en
short: "<p>Today I needed to connect to MySQL server in vagrant using SequelPro. But I did not want to open the server IP/ports to the whole network. </p> <p>I was looking a way to connect to my server then I found out that SequelPro allows you to open an SSH tunnel to your server to connect MySQL server. Using the SSH settings of vagrant, I was not able to connect to my server in order to connect to MySQL Server. </p>"
tags: Vagrant, VirtualBox, SSH, MySQL, SequelPro
date: 2018-01-22 13:21:16
created_at: "2018-01-22T11:21:16+0000"
published_at: "2018-01-22T11:21:16+0000"
---

Today I needed to connect to MySQL server in vagrant using SequelPro. But I did not want to open the server IP/ports to the whole network. 

I was looking a way to connect to my server then I found out that SequelPro allows you to open an SSH tunnel to your server to connect MySQL server. 
Using the SSH settings of vagrant, I was not able to connect to my server in order to connect to MySQL Server. The settings, I set, was like;

```bash
Host: 127.0.0.1
Port: 2222
User: vagrant
Key: <yourvagrantfolder>/.vagrant/machines/default/virtualbox/private_key
```

You can also find out ssh configurations with `vagrant ssh-config` command. 

So, I try to connect to servers but I end up getting `Host key verification failed.` error from SequelPro;

```bash
debug1: read_passphrase: can't open /dev/tty: Device not configured
debug1: permanently_drop_suid: 501
Host key verification failed.
```

After searching online, I found some StackOverflow pages but none of them convince me how to solve this problem and I could not find a similar issue where they fixed it. After digging a little longer I found out that this is related to SSH's know_hosts.

I was looking a way to add my vagrant IP/port to know_hosts. I had the idea of just trying to log in manually to my vagrant server by using `vagrant ssh-config`'s.

So I attempted;

```bash
$ ssh vagrant@127.0.0.1 -p 2222 -i ~/vagrant/.vagrant/machines/default/virtualbox/private_key 
```

It asks my fingerprint after confirming it, the terminal prompt me that 

```bash
Warning: Permanently added '[127.0.0.1]:2222' (ECDSA) to the list of known hosts.
```

Then I was able to connect to MySQL server using SequelPro via SSH. 

It is better to have this information somewhere on the web for the people who have the similar problem. For the specs, I have at this moment; 

```
Vagrant 2.0.1
VirtualBox 5.2.6r120293
```

Let me know if this information helps you!