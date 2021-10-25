---
name: Setting up WSL
tags: ['CLI', 'Linux']
description: Install Linux inside windows with WSL
---
Some people may want to use some linux tools or just prefer linux for development, but don't want to switch away from
Windows. WSL provides a virtual linux environment for the user to make full use of linux applications and as of recent
even GUI application with Windows 11.

# Prerequisits
- Windows 10 version 2004 (build 19041 and higher) or Windows 11

# Step 1
Firstly open a command prompt or powershell Windows, by opening the start menu and searching for "PowerShell", or "CMD"
if you prefer, but I prefer PowerShell.

!#[/tutorial-assets/wsl-install/]

# Step 2
Once the powershell, or cmd, window has opened, WSL can be installed with 
```batch
wsl --install
```

This command will install Ubuntu by default, but this behaviour can be customized to install other linux distors. You can
see what distros are available with the
```batch
wsl --list --online
```
command, and then install you chosen distro with
```batch
wsl --install -d <distro-name>
```

# Step 3
Once the distro has installed, you can launch a session by finding the distro in the start menu, for example ubuntu,
you will then be prompted to enter a username and password, this doesn't have to be the same as you windows credentials,
but you might elect to keep them the same for simplicity’s sake.

# Conclusion
You now have a working WSL distribution installed and setup on your computer