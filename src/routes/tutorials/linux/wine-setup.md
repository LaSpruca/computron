---
name: Wine Setup
tags: ["CLI", "Setup", "Ubuntu"]
description: Setup wine to run windows programs on linux
---
Wine is a useful utility that provides mapping for windows APIs to linux ones, as stated on its website 
Wine Is Not an Emulator, which is where it gets its name from. This tutorial will show setup and install on Ubuntu linux
20.04 and 21.04, although more instruction can be found on [wine's website](https://winehq.org).

# Step 1
The first step is to enable 32 bit architecture, this can be done with the following command:
```bash
sudo dpkg --add-architecture i386
```

# Step 2
The next step is add the wine repos, firstly the wine repositery keys must be added to the system, this is done using the
following commands.
```bash
wget -nc https://dl.winehq.org/wine-builds/winehq.key
sudo apt-key add winehq.key
```

Next the repos can be added using the following commands:

For ubuntu 20.04:
```bash
sudo add-apt-repository 'deb https://dl.winehq.org/wine-builds/ubuntu/ hirsute main'
```

For ubuntu 21.04
```bash
sudo add-apt-repository 'deb https://dl.winehq.org/wine-builds/ubuntu/ focal main'
```

# Step 3
Next you need to tell the package manager to check the repos for any new updates, this lets apt find the packages in the
newly added wine repos
```bash
sudo apt update
```

# Step 4
Finally wine can be installed using 
```bash
sudo apt install --install-recommends winehq-stable
```

# Conclusion
Now with wine installed you can install some Windows application onto your system, not it does not work with all 
applications. 
