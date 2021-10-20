---
name: 'Managing software'
tags: ['CLI']
description: Learn how to use package manager to control the packages and software on your system.
---

# What is a package manager?

A package manager is a collection of tools are is used to install, remove, update, and configure "packages" on your computer
in a consistent manner. A package can be any piece of software, for a program with a GUI like Google Chrome, to a CLI app
like cowsay, or a library like GLibC. A package manager can, but not always, have different repos to search for packages,
and will automatically install any dependencies of the package that you are installing.

# Package managers

There are many package managers, for this tutorial, when I am talking about different package managers, I will
only be talking about the different front ends, as there are many package manager front ends that use the same
package manager under the hood.

There are four package managers that I will be discussing in this tutorial.

- **`apt`**: The default package manager on Debian and its derivatives like Ubuntu, Linux Mint, and elementary os. It uses the DEB package format.
- **`dnf`**: The default package manager on Red Hat sponsored distros like Fedora, RHEL, and Rockey Linux. It uses the RPM format.
- **`pacman`**: The default package manager on Arch linux and its derivatives like ArcoLinux and EndeavorOS. It uses the bsdtar format.
- **`zypper`**: The default package manager on OpenSUSE. It uses the RPM format.

These are just a few of the package managers that exists, these are just a few that are used in relatively common distros.

# Installing packages

One of the main things that you will want to do with your package manager is installing some software. Here is how you do it across distros.

**apt**

```bash
sudo apt install <package-name>
```

**dnf**

```bash
sudo dnf install <package-name>
```

**pacman**

```bash
sudo pacman -S <package-name>
```

**zypper**

```bash
sudo zypper in <package-name>
```

# Updating the system
 You will need to update all the packages on your system at some point. This insures that you have the latest features
 and security patches for you computer. The eaisies way to do this is to update everthing at once.

**apt**

```bash
sudo apt update
sudo apt upgrade
```

**dnf**

```bash
sudo dnf update
```

**pacman**

```bash
sudo pacman -Syu
```

**zypper**

```bash
sudo zypper up
```

## Listing updates
Before you go ham updating the system, you might want to check what could be updated, so you can update a specific 
package to avoid bricking something due to a breaking change, or because you don't want the new version.
**apt**

```bash
sudo apt list --upgradable
```

**dnf**

```bash
sudo dnf check-update
```

**pacman**

```bash
sudo pacman -Syu
```

**zypper**

```bash
sudo zypper up
```

# Removing packages
Evantually you'll need to remove a package from your system. When removing a pacakage, sometimes and 'orphan' can be left
behind on the system. As the name suggests, an orphan package is a package that was depended on by another package, but
now is un needed. These can take up unnecessary space. While some package managers do this automatically, others don't,
so when required both version will be shown.

**apt**

```bash
# Remove without removing orphans
suod apt remove <package-name>
# Remove with removing orphans
sudo apt autoremove <pacakge-name>
```

**dnf**

```bash
# Remove without removing orphans
sudo dnf remove --nodeps <package-name>
# Remove with removing orphans
sudo dnf remove <package-name>
```

**pacman**

```bash
# Remove without removing orphans
sudo pacman -R <package-name>
# Remove with removing orphans
sudo pacman -Rs <package-name>
```

**zypper**

```bash
# Remove without removing orphans
sudo zypper rm -RU <package-name>
# Remove with removing orphans
sudo zypper rm -u -force-resolution <package-name>
```
