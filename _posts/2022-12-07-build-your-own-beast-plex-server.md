---
layout: post
title:  "Build your own beast plex server"
author: andre
categories: [How To]
image: assets/images/plex-main-logo.avif
description: "Build Your Own Beast Plex Server to run your own streaming video services. Everything you'll need to set up and run the server."
---

You can now create your own Beast Plex Server service, which allows users to view and stream their movies, TV episodes, and music in great quality from whatever device they choose. This how-to guide will help you through the process of setting up your own own Plex server.

### What is a Beast Plex Server?

All your video, audio, and other visual information is stored, organized, and streamed by the Plex Media Server. Server clients are playback apps that can be installed on a wide range of devices and web browsers.

Plex Media Server is the name of the back-end component, which is free (you do not need to subscribe to a Plex pass account to use it). It can receive content from files, iTunes, iPhoto, Aperture, or the internet and then organize it into a library based on metadata tags like title, artist, album, genre, year, and popularity.

It organizes audio and video content from personal media libraries and streams it to the player, either locally or over a LAN, depending on the user's preference. Plex works with a variety of operating systems, including Windows, macOS, Linux, and FreeBSD, as well as NAS and the Nvidia Shield TV.

The player apps utilized on the front end include Plex Web App, Plexamp, and Plex Dash. They let the user to manage and play any and all content saved on the Plex Media Server. The great majority of apps are free to download.

Users with free Plex accounts can access Plex, Inc.'s content collection, which includes ad-supported video on demand and free-to-stream live TV channels. These free accounts also enable users to share their personal media libraries with friends or among their own device collection.

![Build your own beast plex server](/assets/images/build-your-own-beast-plex-server.avif)Source plex.tv

### Plex Media Server hardware requirements

It is critical to adhere to the Plex hardware specifications while building your own beast plex server. Your beast plex server can be run on a desktop computer, server hardware, or a NAS storage device such as Drobo, Netgear, or Synology. A complete Plex NAS compatibility guide [may be found here](https://docs.google.com/spreadsheets/d/1MfYoJkiwSqCXg8cm5-Ac4oOLPRtCkgUxU0jdj3tmMPc/edit#gid=1274624273).

### Beast Plex Servers CPU requirements

The minimum CPU requirements for Plex servers are Intel Core i3, but this is dependent on how many people are accessing content at the same time. Because the server may need transcoding of content during playback at times, you may require something quicker than the minimum.

If your computer's CPU cannot keep up with transcoding your media, you will notice halting or buffering while the app waits for the server to catch up.

The most important thing to remember is that the more Plex programs that are playing content at the same time, the more processing power is required. When you have two Plex apps operating at the same time, each of which requires transcoded content, the amount of processing power required by your computer's central processing unit (CPU) nearly doubles when only one program is playing video.

Flex suggests the following CPU specs: 

+ No transcoding: “Atom” 1.2GHz (NAS based on ARM processors) 
+ Single 720p transcode: Intel i3 3.0 GHz
+ Single 1080p transcode: Intel Core i5 3.0GHz 
+ Single 4K transcode: Intel Core i7 3.2GHz

### Beast Plex Server memory requirements

In most cases, Plex Media Server does not need a significant amount of memory (RAM) to provide the service. In most cases, 2 gigabytes of memory is more than adequate. Some installations, particularly those based on Linux, can often run without even that much memory. Having more RAM won't hurt you in any way, and it will definitely be helpful if you're using the computer for a variety of tasks at the same time. 

### Is it a good idea to build your own beast plex server on a NAS?

Plex Media Server operating on a network attached storage (NAS) device may be an ideal alternative for some users, but it is not always appropriate for all situations.

The fact that most consumer NAS do not have particularly powerful CPUs is going to be the most aggravating limitation for most customers. In other cases, the mobile device will be powered by an ARM-based processor that lacks any capacity or capabilities for content transcoding.

On other cases, it may run on an Intel processor that is theoretically capable of transcoding but is too slow to transcode at a rate adequate for the majority of applications.

If you want to run your beast plex server on a NAS, you may read a pretty extensive [article here](https://support.plex.tv/articles/201373793-is-plex-media-server-on-a-nas-right-for-me/).

### How to install and build your own beast plex server

Plex installation is comparable to other software installations, with the exception that you must first install the server software. Once this is completed, you can begin using Plex. Following that, you must install programs on each of your devices in order for them to connect to the server.

Organizing your numerous sources of media is a potentially critical step. As you set up your Plex Material Server, you will begin the process of establishing libraries for your media, such as movies, television shows, music, photographs, and home videos.

Plex will recognize and match material like as movies and TV shows when you do this. It will then collect information such as movie poster artwork, movie casts, and TV episode descriptions, among other things, to beautify your collections.

#### Choosing a server and performance considerations

Plex Media Server is compatible with computers running Windows, Mac OS X, or Linux; some users run it on their primary computer, while others deploy it on a separate machine. It is also possible to install it on a NAS, provided that it is compatible. In general, Plex runs without any issues on the majority of modern computers. 

Keep in mind two important points for providing a good plex media server performance.

#### Media Users

To begin, the Plex Media Server may broadcast material to several users' devices at the same time. Assume that everyone in your family is watching a film or other sort of media on Plex at the same time, which consumes more server resources. As a result, the server's power must be increased in proportion to the number of individuals viewing material at the same time.

#### Bandwidth

Second, when Plex optimizes your media files for specific devices or available bandwidth, it converts (or "transcodes") the content while it is playing. This needs a tremendous amount of server resources, but it allows you to access all of your stuff, regardless of size, on all of your devices, regardless of size.

Problems with playback, such as stuttering, buffering, or even failure to play at all, indicate that your server lacks the processing power required for the manner you utilize it.

When this happens, it almost always means that the central processing unit (CPU) is struggling to keep up with the number of users, the amount of transcoding, or both. As a result, you should seriously consider updating your gear. It's also possible that your hardware is fine, but your connection's speed is the issue.

#### Download your beast plex server

Once you've selected where you'll install the Plex Media Server, go to the [Plex Downloads website](https://plex.tv/downloads/) and download the server for your device from there. Make sure you select the correct plex server software for your operating system.

It is critical to ensure that the computer acting as the server has an active internet connection during the installation procedure. The setup wizard will then work properly, and you will be able to create an account as it does so.

#### Download a Plex Player App

While you're on the Downloads page, you might wish to install a player app for your device. The browser-based Plex Web App is provided with the server; however, to use it on other devices, you will most likely need to download an app.

The beast plex server apps are available for desktops running Windows and Mac OS, mobile devices running Android and iOS, and connected devices such as Amazon Fire TV, Android TV, Roku, Smart TVs, gaming consoles, and so on.

### You beast plex server installation

The server is compatible with a wide range of operating systems and platforms. Installation is always performed using an installation package and follows the platform's regular installation method. When working with NAS, it is critical to follow the manufacturer's add-on installation instructions.

#### Beast Plex Server on Windows

Download the installer file with an.exe file extension to install your beast plex server on Windows 10 or Windows 11.

Run the installer and proceed with the standard Windows 10 installation procedure. After the installation is complete, click the "Launch" button or use the Start button to launch the Beast plex server.

It is time to perform a beast plex software initial configuration when the server has been activated and displays a System Tray icon (the one at the bottom right of the screen). Simply select "Open Plex..." from the Plex system tray menu.

![Best Plex Server on Windows](/assets/images/beast-plex-servre-initial-configuration.avif)

#### Beast Plex Server on Mac OS

To build your own beast plex server on Mac OS, download the Plex Media Server software .zip file, unzip the file, and drag the beast plex app to your Mac Applications folder. 

After launching the media server from the Application folder, you can begin initial server setup by clicking on “Open Plex...” from the “>” icon.

![Beast Plex Server on Mac](/assets/images/beast-plex-server-initial-setup-on-mac.avif)Source plex.tv

#### Beast Plex Server on Linux

To install the Beast Plex server on Fedora/CentOS download the .rpm package with a current version and run “sudo yum install plexmediaserver-x.xx.x.xxxx.x86_64.rpm”. To proceed with the initial server setup, open a browser on the same server and go to http://localhost:32400/web. 

To install Beast server on Ubuntu, download the .deb package and run “sudo dpkg -i plexmediaserver-x.xx.x.xxxx.x86_64.deb”. To set up the server, go to the same URL as shown above for the Fedora installation. 

By default, the Beast Media Server runs in the context of the user "plex." Your media directories and files must allow the plex user to read and execute files in order for plex to work properly.

#### Your Beast server on a Network Attached Storage

Download the installation package for your particular NAS and follow your hardware specific installation instructions to install the server. Go to http://nas.ip.address:32400/web address to configure your server.

### To open the streaming web app on a different computer

#### On the same local network

If your other computer is on the same local network as your server, you can simply open a browser window, go to the following address, http://local.server.ip.address:32400/web, and you will be connected to the server. 

#### On a different network

If your client is remote on a different network, you have to go through a slightly more complicated procedure of setting up an SSH tunnel to initially configure your server. 

##### SSH tunnel on Mac OS or Linux

You are going to use a command line on the terminal to configure the tunnel. So, open your terminal and enter the following command: “ssh -L 8888:127.0.0.1:32400 your.server.ip.address”. Now, in your browser, open the following address “http://127.0.0.1:8888/web” and you will be connected to the server. 

##### SSH tunnel on Windows

If your client and the server both use Windows, they support RDP protocol features, and you can connect using a Remote Desktop session. 

However, if your server is based on Mac OS or Linux, you would need to use either the built-in SSH client that support SSH tunneling or a Putty application to configure the tunnel. For Putty connection you have to specify a gateway, which is your.server.ip.address, source port 8888, and your destination 127.0.0.1:32400. After everything is set, you can reach your server via your browser at the address http://127.0.0.1:8888/web.

### Your Media Collection

Finally, properly structuring your media collection is the most crucial step in offering exceptional multimedia server capabilities.

Your media should have a specified file structure that is distinct for media in their own directories, stand-alone media files, and numerous editions in order for the media server to perform properly.

Please see the [Plex full media organization tutorial](https://support.plex.tv/articles/categories/your-media/) for help with naming and arranging your music, TV show, and personal media files, as well as employing subtitles.

### In conclusion

Adding a Beast Plex server to your home network is a great way to increase the storage capacity of your personal media library while also making streaming content easier than ever.

If you use the official Beast Plex application, you will not have access to additional capabilities such as transcoding and background playback. However, if you build your own Beast Plex server, you will be able to tailor it to match your needs while adhering to any constraints you may have.
