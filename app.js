// Sample software data
const softwareData = [
    // Browsers
    {
        id: 1,
        name: "Chrome Browser",
        category: "Internet",
        description: "Fast and secure web browser from Google",
        downloads: 1000000,
        downloadLink: "https://www.google.com/chrome/"
    },
    {
        id: 2,
        name: "Mozilla Firefox",
        category: "Internet",
        description: "Free and open-source web browser",
        downloads: 950000,
        downloadLink: "https://www.mozilla.org/firefox/"
    },
    {
        id: 3,
        name: "Opera Browser",
        category: "Internet",
        description: "Fast and feature-rich web browser",
        downloads: 800000,
        downloadLink: "https://www.opera.com/"
    },

    // Media Players
    {
        id: 4,
        name: "VLC Media Player",
        category: "Multimedia",
        description: "Free and open source media player",
        downloads: 800000,
        downloadLink: "https://www.videolan.org/vlc/"
    },
    {
        id: 5,
        name: "PotPlayer",
        category: "Multimedia",
        description: "Powerful multimedia player",
        downloads: 600000,
        downloadLink: "https://potplayer.daum.net/"
    },
    {
        id: 6,
        name: "Winamp",
        category: "Multimedia",
        description: "Classic media player with modern features",
        downloads: 400000,
        downloadLink: "https://www.winamp.com/"
    },

    // Utilities
    {
        id: 7,
        name: "7-Zip",
        category: "Utilities",
        description: "File archiver with high compression ratio",
        downloads: 600000,
        downloadLink: "https://7-zip.org/"
    },
    {
        id: 8,
        name: "WinRAR",
        category: "Utilities",
        description: "Popular file compression and archive utility",
        downloads: 550000,
        downloadLink: "https://www.win-rar.com/"
    },
    {
        id: 9,
        name: "CCleaner",
        category: "Utilities",
        description: "System optimization and cleaning tool",
        downloads: 750000,
        downloadLink: "https://www.ccleaner.com/"
    },

    // Audio/Video Editors
    {
        id: 10,
        name: "Audacity",
        category: "Multimedia",
        description: "Free audio editor and recorder",
        downloads: 400000,
        downloadLink: "https://www.audacityteam.org/"
    },
    {
        id: 11,
        name: "OBS Studio",
        category: "Multimedia",
        description: "Free and open source streaming/recording software",
        downloads: 700000,
        downloadLink: "https://obsproject.com/"
    },
    {
        id: 12,
        name: "HandBrake",
        category: "Multimedia",
        description: "Open source video transcoder",
        downloads: 300000,
        downloadLink: "https://handbrake.fr/"
    },

    // Security
    {
        id: 13,
        name: "Malwarebytes",
        category: "Security",
        description: "Anti-malware security software",
        downloads: 850000,
        downloadLink: "https://www.malwarebytes.com/"
    },
    {
        id: 14,
        name: "Avast Antivirus",
        category: "Security",
        description: "Comprehensive antivirus protection",
        downloads: 900000,
        downloadLink: "https://www.avast.com/"
    },
    {
        id: 15,
        name: "AVG Antivirus",
        category: "Security",
        description: "Free antivirus and security software",
        downloads: 800000,
        downloadLink: "https://www.avg.com/"
    },

    // Communication
    {
        id: 16,
        name: "Discord",
        category: "Communication",
        description: "Voice, video and text chat app",
        downloads: 950000,
        downloadLink: "https://discord.com/"
    },
    {
        id: 17,
        name: "Telegram",
        category: "Communication",
        description: "Cloud-based messaging app",
        downloads: 900000,
        downloadLink: "https://telegram.org/"
    },
    {
        id: 18,
        name: "Skype",
        category: "Communication",
        description: "Video chat and voice call service",
        downloads: 850000,
        downloadLink: "https://www.skype.com/"
    },

    // Development Tools
    {
        id: 19,
        name: "Visual Studio Code",
        category: "Development",
        description: "Lightweight but powerful source code editor",
        downloads: 950000,
        downloadLink: "https://code.visualstudio.com/"
    },
    {
        id: 20,
        name: "Git",
        category: "Development",
        description: "Distributed version control system",
        downloads: 800000,
        downloadLink: "https://git-scm.com/"
    },
    {
        id: 21,
        name: "Python",
        category: "Development",
        description: "Popular programming language",
        downloads: 900000,
        downloadLink: "https://www.python.org/"
    },

    // Graphics and Design
    {
        id: 22,
        name: "GIMP",
        category: "Graphics",
        description: "Free and open source image editor",
        downloads: 700000,
        downloadLink: "https://www.gimp.org/"
    },
    {
        id: 23,
        name: "Inkscape",
        category: "Graphics",
        description: "Professional vector graphics editor",
        downloads: 600000,
        downloadLink: "https://inkscape.org/"
    },
    {
        id: 24,
        name: "Blender",
        category: "Graphics",
        description: "Free and open source 3D creation suite",
        downloads: 800000,
        downloadLink: "https://www.blender.org/"
    },

    // Office Software
    {
        id: 25,
        name: "LibreOffice",
        category: "Office",
        description: "Free and open source office suite",
        downloads: 750000,
        downloadLink: "https://www.libreoffice.org/"
    },
    {
        id: 26,
        name: "OpenOffice",
        category: "Office",
        description: "Open-source office productivity suite",
        downloads: 700000,
        downloadLink: "https://www.openoffice.org/"
    },
    {
        id: 27,
        name: "PDF Reader",
        category: "Office",
        description: "View, create, and edit PDF documents",
        downloads: 850000,
        downloadLink: "https://get.adobe.com/reader/"
    },

    // Gaming
    {
        id: 28,
        name: "Steam",
        category: "Gaming",
        description: "Digital game distribution platform",
        downloads: 950000,
        downloadLink: "https://store.steampowered.com/"
    },
    {
        id: 29,
        name: "Epic Games",
        category: "Gaming",
        description: "Digital game store and launcher",
        downloads: 900000,
        downloadLink: "https://www.epicgames.com/"
    },
    {
        id: 30,
        name: "GOG Galaxy",
        category: "Gaming",
        description: "Gaming client and store",
        downloads: 700000,
        downloadLink: "https://www.gog.com/galaxy"
    },

    // Video Editors
    {
        id: 31,
        name: "DaVinci Resolve",
        category: "Multimedia",
        description: "Professional video editing software",
        downloads: 850000,
        downloadLink: "https://www.blackmagicdesign.com/products/davinciresolve"
    },
    {
        id: 32,
        name: "Kdenlive",
        category: "Multimedia",
        description: "Open source video editor",
        downloads: 450000,
        downloadLink: "https://kdenlive.org/"
    },
    {
        id: 33,
        name: "Shotcut",
        category: "Multimedia",
        description: "Free, open source video editor",
        downloads: 400000,
        downloadLink: "https://www.shotcut.org/"
    },

    // Audio Software
    {
        id: 34,
        name: "FL Studio",
        category: "Multimedia",
        description: "Digital Audio Workstation",
        downloads: 750000,
        downloadLink: "https://www.image-line.com/"
    },
    {
        id: 35,
        name: "LMMS",
        category: "Multimedia",
        description: "Free digital audio workstation",
        downloads: 350000,
        downloadLink: "https://lmms.io/"
    },
    {
        id: 36,
        name: "Reaper",
        category: "Multimedia",
        description: "Digital audio production application",
        downloads: 400000,
        downloadLink: "https://www.reaper.fm/"
    },

    // System Utilities
    {
        id: 37,
        name: "CPU-Z",
        category: "Utilities",
        description: "System information software",
        downloads: 650000,
        downloadLink: "https://www.cpuid.com/softwares/cpu-z.html"
    },
    {
        id: 38,
        name: "GPU-Z",
        category: "Utilities",
        description: "Graphics card information utility",
        downloads: 600000,
        downloadLink: "https://www.techpowerup.com/gpuz/"
    },
    {
        id: 39,
        name: "HWiNFO",
        category: "Utilities",
        description: "Hardware information and diagnostic tool",
        downloads: 500000,
        downloadLink: "https://www.hwinfo.com/"
    },

    // Backup Software
    {
        id: 40,
        name: "Macrium Reflect",
        category: "Utilities",
        description: "Disk cloning and backup software",
        downloads: 450000,
        downloadLink: "https://www.macrium.com/reflectfree"
    },
    {
        id: 41,
        name: "EaseUS Todo Backup",
        category: "Utilities",
        description: "Backup and recovery software",
        downloads: 500000,
        downloadLink: "https://www.easeus.com/backup-software/"
    },

    // Remote Desktop
    {
        id: 42,
        name: "TeamViewer",
        category: "Utilities",
        description: "Remote desktop access and control",
        downloads: 900000,
        downloadLink: "https://www.teamviewer.com/"
    },
    {
        id: 43,
        name: "AnyDesk",
        category: "Utilities",
        description: "Remote desktop software",
        downloads: 850000,
        downloadLink: "https://anydesk.com/"
    },

    // File Management
    {
        id: 44,
        name: "Total Commander",
        category: "Utilities",
        description: "File manager for Windows",
        downloads: 700000,
        downloadLink: "https://www.ghisler.com/"
    },
    {
        id: 45,
        name: "Directory Opus",
        category: "Utilities",
        description: "Advanced file manager",
        downloads: 400000,
        downloadLink: "https://www.gpsoft.com.au/"
    },

    // Development Tools
    {
        id: 46,
        name: "Notepad++",
        category: "Development",
        description: "Text and source code editor",
        downloads: 950000,
        downloadLink: "https://notepad-plus-plus.org/"
    },
    {
        id: 47,
        name: "Sublime Text",
        category: "Development",
        description: "Sophisticated text editor",
        downloads: 850000,
        downloadLink: "https://www.sublimetext.com/"
    },
    {
        id: 48,
        name: "PyCharm",
        category: "Development",
        description: "Python IDE by JetBrains",
        downloads: 800000,
        downloadLink: "https://www.jetbrains.com/pycharm/"
    },
    {
        id: 49,
        name: "Eclipse",
        category: "Development",
        description: "IDE for Java and other languages",
        downloads: 750000,
        downloadLink: "https://www.eclipse.org/"
    },

    // Database Tools
    {
        id: 50,
        name: "MySQL Workbench",
        category: "Development",
        description: "Database design and administration tool",
        downloads: 700000,
        downloadLink: "https://www.mysql.com/products/workbench/"
    },
    {
        id: 51,
        name: "DBeaver",
        category: "Development",
        description: "Universal database tool",
        downloads: 650000,
        downloadLink: "https://dbeaver.io/"
    },

    // Graphics Software
    {
        id: 52,
        name: "Paint.NET",
        category: "Graphics",
        description: "Image and photo editing software",
        downloads: 800000,
        downloadLink: "https://www.getpaint.net/"
    },
    {
        id: 53,
        name: "Krita",
        category: "Graphics",
        description: "Digital painting program",
        downloads: 700000,
        downloadLink: "https://krita.org/"
    },

    // 3D Modeling
    {
        id: 54,
        name: "SketchUp",
        category: "Graphics",
        description: "3D modeling software",
        downloads: 600000,
        downloadLink: "https://www.sketchup.com/"
    },
    {
        id: 55,
        name: "FreeCAD",
        category: "Graphics",
        description: "3D parametric modeler",
        downloads: 500000,
        downloadLink: "https://www.freecadweb.org/"
    },

    // Security Tools
    {
        id: 56,
        name: "Wireshark",
        category: "Security",
        description: "Network protocol analyzer",
        downloads: 800000,
        downloadLink: "https://www.wireshark.org/"
    },
    {
        id: 57,
        name: "Nmap",
        category: "Security",
        description: "Network security scanner",
        downloads: 750000,
        downloadLink: "https://nmap.org/"
    },

    // Password Managers
    {
        id: 58,
        name: "KeePass",
        category: "Security",
        description: "Free password manager",
        downloads: 700000,
        downloadLink: "https://keepass.info/"
    },
    {
        id: 59,
        name: "Bitwarden",
        category: "Security",
        description: "Open source password manager",
        downloads: 800000,
        downloadLink: "https://bitwarden.com/"
    },

    // Gaming Tools
    {
        id: 60,
        name: "MSI Afterburner",
        category: "Gaming",
        description: "Graphics card overclocking utility",
        downloads: 900000,
        downloadLink: "https://www.msi.com/Landing/afterburner"
    },
    {
        id: 61,
        name: "GeForce Experience",
        category: "Gaming",
        description: "NVIDIA's gaming companion software",
        downloads: 950000,
        downloadLink: "https://www.nvidia.com/en-us/geforce/geforce-experience/"
    },
    {
        id: 62,
        name: "AMD Radeon Software",
        category: "Gaming",
        description: "AMD graphics control panel",
        downloads: 900000,
        downloadLink: "https://www.amd.com/en/technologies/radeon-software"
    },

    // Messaging and Communication
    {
        id: 63,
        name: "WhatsApp Desktop",
        category: "Communication",
        description: "Desktop version of WhatsApp messenger",
        downloads: 950000,
        downloadLink: "https://www.whatsapp.com/download"
    },
    {
        id: 64,
        name: "Signal",
        category: "Communication",
        description: "Secure messaging application",
        downloads: 800000,
        downloadLink: "https://signal.org/"
    },
    {
        id: 65,
        name: "Viber",
        category: "Communication",
        description: "Voice and messaging app",
        downloads: 850000,
        downloadLink: "https://www.viber.com/"
    },

    // Cloud Storage
    {
        id: 66,
        name: "Dropbox",
        category: "Utilities",
        description: "Cloud storage and file synchronization",
        downloads: 900000,
        downloadLink: "https://www.dropbox.com/"
    },
    {
        id: 67,
        name: "Google Drive",
        category: "Utilities",
        description: "Cloud storage and file backup",
        downloads: 950000,
        downloadLink: "https://www.google.com/drive/download/"
    },
    {
        id: 68,
        name: "OneDrive",
        category: "Utilities",
        description: "Microsoft's cloud storage solution",
        downloads: 900000,
        downloadLink: "https://www.microsoft.com/microsoft-365/onedrive/download"
    },

    // Video Conferencing
    {
        id: 69,
        name: "Zoom",
        category: "Communication",
        description: "Video conferencing software",
        downloads: 1000000,
        downloadLink: "https://zoom.us/download"
    },
    {
        id: 70,
        name: "Microsoft Teams",
        category: "Communication",
        description: "Business communication platform",
        downloads: 950000,
        downloadLink: "https://www.microsoft.com/microsoft-teams/download-app"
    },
    {
        id: 71,
        name: "Google Meet",
        category: "Communication",
        description: "Video conferencing service",
        downloads: 900000,
        downloadLink: "https://meet.google.com/"
    },

    // Music Software
    {
        id: 72,
        name: "Spotify",
        category: "Multimedia",
        description: "Music streaming service",
        downloads: 1000000,
        downloadLink: "https://www.spotify.com/download/"
    },
    {
        id: 73,
        name: "iTunes",
        category: "Multimedia",
        description: "Media player and library manager",
        downloads: 900000,
        downloadLink: "https://www.apple.com/itunes/"
    },
    {
        id: 74,
        name: "Foobar2000",
        category: "Multimedia",
        description: "Advanced audio player",
        downloads: 500000,
        downloadLink: "https://www.foobar2000.org/"
    },

    // System Optimization
    {
        id: 75,
        name: "Advanced SystemCare",
        category: "Utilities",
        description: "System optimization suite",
        downloads: 800000,
        downloadLink: "https://www.iobit.com/advancedsystemcarefree.php"
    },
    {
        id: 76,
        name: "Glary Utilities",
        category: "Utilities",
        description: "System tools and optimization",
        downloads: 700000,
        downloadLink: "https://www.glarysoft.com/"
    },
    {
        id: 77,
        name: "Wise Care 365",
        category: "Utilities",
        description: "PC cleaner and optimizer",
        downloads: 600000,
        downloadLink: "https://www.wisecleaner.com/wise-care-365.html"
    },

    // Screen Recording
    {
        id: 78,
        name: "Camtasia",
        category: "Multimedia",
        description: "Screen recorder and video editor",
        downloads: 700000,
        downloadLink: "https://www.techsmith.com/video-editor.html"
    },
    {
        id: 79,
        name: "Bandicam",
        category: "Multimedia",
        description: "Screen recording software",
        downloads: 650000,
        downloadLink: "https://www.bandicam.com/"
    },
    {
        id: 80,
        name: "ShareX",
        category: "Multimedia",
        description: "Screen capture and file sharing tool",
        downloads: 800000,
        downloadLink: "https://getsharex.com/"
    },

    // PDF Tools
    {
        id: 81,
        name: "Foxit Reader",
        category: "Office",
        description: "PDF reader and editor",
        downloads: 850000,
        downloadLink: "https://www.foxit.com/pdf-reader/"
    },
    {
        id: 82,
        name: "Sumatra PDF",
        category: "Office",
        description: "Lightweight PDF reader",
        downloads: 700000,
        downloadLink: "https://www.sumatrapdfreader.org/"
    },
    {
        id: 83,
        name: "PDF-XChange Editor",
        category: "Office",
        description: "Advanced PDF editor",
        downloads: 600000,
        downloadLink: "https://www.tracker-software.com/"
    },

    // Virtual Machines
    {
        id: 84,
        name: "VirtualBox",
        category: "Development",
        description: "Virtualization software",
        downloads: 900000,
        downloadLink: "https://www.virtualbox.org/"
    },
    {
        id: 85,
        name: "VMware Workstation Player",
        category: "Development",
        description: "Desktop virtualization",
        downloads: 850000,
        downloadLink: "https://www.vmware.com/products/workstation-player.html"
    },
    {
        id: 86,
        name: "QEMU",
        category: "Development",
        description: "Open-source emulator",
        downloads: 500000,
        downloadLink: "https://www.qemu.org/"
    },

    // Web Development
    {
        id: 87,
        name: "XAMPP",
        category: "Development",
        description: "Web server solution stack",
        downloads: 800000,
        downloadLink: "https://www.apachefriends.org/"
    },
    {
        id: 88,
        name: "WampServer",
        category: "Development",
        description: "Web development environment",
        downloads: 700000,
        downloadLink: "https://www.wampserver.com/"
    },
    {
        id: 89,
        name: "Node.js",
        category: "Development",
        description: "JavaScript runtime environment",
        downloads: 950000,
        downloadLink: "https://nodejs.org/"
    },

    // Game Development
    {
        id: 90,
        name: "Unity",
        category: "Development",
        description: "Game development engine",
        downloads: 900000,
        downloadLink: "https://unity.com/"
    },
    {
        id: 91,
        name: "Unreal Engine",
        category: "Development",
        description: "3D game engine",
        downloads: 850000,
        downloadLink: "https://www.unrealengine.com/"
    },
    {
        id: 92,
        name: "Godot Engine",
        category: "Development",
        description: "Open source game engine",
        downloads: 700000,
        downloadLink: "https://godotengine.org/"
    },

    // System Tools
    {
        id: 93,
        name: "Process Explorer",
        category: "Utilities",
        description: "Advanced task manager",
        downloads: 800000,
        downloadLink: "https://docs.microsoft.com/sysinternals/downloads/process-explorer"
    },
    {
        id: 94,
        name: "Autoruns",
        category: "Utilities",
        description: "Startup program manager",
        downloads: 700000,
        downloadLink: "https://docs.microsoft.com/sysinternals/downloads/autoruns"
    },
    {
        id: 95,
        name: "Process Monitor",
        category: "Utilities",
        description: "System monitoring tool",
        downloads: 650000,
        downloadLink: "https://docs.microsoft.com/sysinternals/downloads/procmon"
    },

    // Disk Management
    {
        id: 96,
        name: "Disk Cleanup",
        category: "Utilities",
        description: "Storage space recovery",
        downloads: 900000,
        downloadLink: "https://support.microsoft.com/windows/disk-cleanup"
    },
    {
        id: 97,
        name: "Defraggler",
        category: "Utilities",
        description: "Disk defragmentation tool",
        downloads: 700000,
        downloadLink: "https://www.ccleaner.com/defraggler"
    },
    {
        id: 98,
        name: "HDDScan",
        category: "Utilities",
        description: "Hard drive diagnostic tool",
        downloads: 500000,
        downloadLink: "https://hddscan.com/"
    },

    // Network Tools
    {
        id: 99,
        name: "Advanced IP Scanner",
        category: "Utilities",
        description: "Network scanner",
        downloads: 800000,
        downloadLink: "https://www.advanced-ip-scanner.com/"
    },
    {
        id: 100,
        name: "NetWorx",
        category: "Utilities",
        description: "Network bandwidth monitor",
        downloads: 600000,
        downloadLink: "https://www.softperfect.com/products/networx/"
    },

    // Gaming Platforms and Tools
    {
        id: 101,
        name: "Battle.net",
        category: "Gaming",
        description: "Blizzard's gaming platform",
        downloads: 900000,
        downloadLink: "https://www.blizzard.com/download/"
    },
    {
        id: 102,
        name: "Origin",
        category: "Gaming",
        description: "EA's gaming platform",
        downloads: 850000,
        downloadLink: "https://www.origin.com/download"
    },
    {
        id: 103,
        name: "Uplay",
        category: "Gaming",
        description: "Ubisoft's gaming platform",
        downloads: 800000,
        downloadLink: "https://uplay.ubisoft.com/"
    },
    {
        id: 104,
        name: "Razer Cortex",
        category: "Gaming",
        description: "Game booster and optimizer",
        downloads: 700000,
        downloadLink: "https://www.razer.com/cortex"
    },
    {
        id: 105,
        name: "Discord Nitro",
        category: "Gaming",
        description: "Enhanced Discord gaming features",
        downloads: 850000,
        downloadLink: "https://discord.com/nitro"
    },

    // Video Editing
    {
        id: 106,
        name: "Adobe Premiere Pro",
        category: "Multimedia",
        description: "Professional video editing software",
        downloads: 800000,
        downloadLink: "https://www.adobe.com/products/premiere.html"
    },
    {
        id: 107,
        name: "Vegas Pro",
        category: "Multimedia",
        description: "Professional video editing suite",
        downloads: 700000,
        downloadLink: "https://www.vegascreativesoftware.com/"
    },
    {
        id: 108,
        name: "Filmora",
        category: "Multimedia",
        description: "Easy-to-use video editor",
        downloads: 750000,
        downloadLink: "https://filmora.wondershare.com/"
    },
    {
        id: 109,
        name: "OpenShot",
        category: "Multimedia",
        description: "Free video editing software",
        downloads: 500000,
        downloadLink: "https://www.openshot.org/"
    },
    {
        id: 110,
        name: "Lightworks",
        category: "Multimedia",
        description: "Professional video editing tool",
        downloads: 450000,
        downloadLink: "https://lwks.com/"
    },

    // Photo Editing
    {
        id: 111,
        name: "Adobe Photoshop",
        category: "Graphics",
        description: "Professional photo editing software",
        downloads: 950000,
        downloadLink: "https://www.adobe.com/products/photoshop.html"
    },
    {
        id: 112,
        name: "Adobe Lightroom",
        category: "Graphics",
        description: "Photo editing and organization",
        downloads: 850000,
        downloadLink: "https://www.adobe.com/products/photoshop-lightroom.html"
    },
    {
        id: 113,
        name: "Capture One",
        category: "Graphics",
        description: "Professional photo editing tool",
        downloads: 400000,
        downloadLink: "https://www.captureone.com/"
    },
    {
        id: 114,
        name: "Affinity Photo",
        category: "Graphics",
        description: "Professional photo editor",
        downloads: 600000,
        downloadLink: "https://affinity.serif.com/photo/"
    },
    {
        id: 115,
        name: "DxO PhotoLab",
        category: "Graphics",
        description: "RAW photo editor",
        downloads: 350000,
        downloadLink: "https://www.dxo.com/"
    },

    // Vector Graphics
    {
        id: 116,
        name: "Adobe Illustrator",
        category: "Graphics",
        description: "Vector graphics editor",
        downloads: 900000,
        downloadLink: "https://www.adobe.com/products/illustrator.html"
    },
    {
        id: 117,
        name: "CorelDRAW",
        category: "Graphics",
        description: "Vector illustration software",
        downloads: 700000,
        downloadLink: "https://www.coreldraw.com/"
    },
    {
        id: 118,
        name: "Affinity Designer",
        category: "Graphics",
        description: "Professional graphic design app",
        downloads: 550000,
        downloadLink: "https://affinity.serif.com/designer/"
    },
    {
        id: 119,
        name: "Vectr",
        category: "Graphics",
        description: "Free vector graphics editor",
        downloads: 400000,
        downloadLink: "https://vectr.com/"
    },
    {
        id: 120,
        name: "SVG-Edit",
        category: "Graphics",
        description: "Online SVG editor",
        downloads: 300000,
        downloadLink: "https://svg-edit.github.io/"
    },

    // Audio Production
    {
        id: 121,
        name: "Ableton Live",
        category: "Multimedia",
        description: "Music production software",
        downloads: 700000,
        downloadLink: "https://www.ableton.com/"
    },
    {
        id: 122,
        name: "Pro Tools",
        category: "Multimedia",
        description: "Professional audio workstation",
        downloads: 600000,
        downloadLink: "https://www.avid.com/pro-tools"
    },
    {
        id: 123,
        name: "Studio One",
        category: "Multimedia",
        description: "Digital audio workstation",
        downloads: 500000,
        downloadLink: "https://www.presonus.com/products/Studio-One"
    },
    {
        id: 124,
        name: "Reason",
        category: "Multimedia",
        description: "Music production software",
        downloads: 400000,
        downloadLink: "https://www.reasonstudios.com/"
    },
    {
        id: 125,
        name: "Bitwig Studio",
        category: "Multimedia",
        description: "Modern music creation system",
        downloads: 300000,
        downloadLink: "https://www.bitwig.com/"
    },

    // 3D Animation
    {
        id: 126,
        name: "Maya",
        category: "Graphics",
        description: "3D animation software",
        downloads: 800000,
        downloadLink: "https://www.autodesk.com/products/maya/"
    },
    {
        id: 127,
        name: "3ds Max",
        category: "Graphics",
        description: "3D modeling and rendering",
        downloads: 750000,
        downloadLink: "https://www.autodesk.com/products/3ds-max/"
    },
    {
        id: 128,
        name: "Cinema 4D",
        category: "Graphics",
        description: "3D animation suite",
        downloads: 600000,
        downloadLink: "https://www.maxon.net/cinema-4d"
    },
    {
        id: 129,
        name: "Houdini",
        category: "Graphics",
        description: "3D animation software",
        downloads: 400000,
        downloadLink: "https://www.sidefx.com/"
    },
    {
        id: 130,
        name: "ZBrush",
        category: "Graphics",
        description: "Digital sculpting tool",
        downloads: 500000,
        downloadLink: "https://pixologic.com/"
    },

    // Web Browsers
    {
        id: 131,
        name: "Microsoft Edge",
        category: "Internet",
        description: "Modern web browser by Microsoft",
        downloads: 900000,
        downloadLink: "https://www.microsoft.com/edge"
    },
    {
        id: 132,
        name: "Brave Browser",
        category: "Internet",
        description: "Privacy-focused web browser",
        downloads: 700000,
        downloadLink: "https://brave.com/"
    },
    {
        id: 133,
        name: "Vivaldi",
        category: "Internet",
        description: "Customizable web browser",
        downloads: 500000,
        downloadLink: "https://vivaldi.com/"
    },
    {
        id: 134,
        name: "Tor Browser",
        category: "Internet",
        description: "Anonymous web browser",
        downloads: 800000,
        downloadLink: "https://www.torproject.org/"
    },
    {
        id: 135,
        name: "Waterfox",
        category: "Internet",
        description: "Privacy-focused Firefox fork",
        downloads: 400000,
        downloadLink: "https://www.waterfox.net/"
    },

    // Programming IDEs
    {
        id: 136,
        name: "IntelliJ IDEA",
        category: "Development",
        description: "Java IDE by JetBrains",
        downloads: 850000,
        downloadLink: "https://www.jetbrains.com/idea/"
    },
    {
        id: 137,
        name: "WebStorm",
        category: "Development",
        description: "JavaScript IDE",
        downloads: 700000,
        downloadLink: "https://www.jetbrains.com/webstorm/"
    },
    {
        id: 138,
        name: "PhpStorm",
        category: "Development",
        description: "PHP IDE",
        downloads: 600000,
        downloadLink: "https://www.jetbrains.com/phpstorm/"
    },
    {
        id: 139,
        name: "Android Studio",
        category: "Development",
        description: "Android development IDE",
        downloads: 900000,
        downloadLink: "https://developer.android.com/studio"
    },
    {
        id: 140,
        name: "Xcode",
        category: "Development",
        description: "Apple development IDE",
        downloads: 800000,
        downloadLink: "https://developer.apple.com/xcode/"
    },

    // Security Software
    {
        id: 141,
        name: "Malwarebytes",
        category: "Security",
        description: "Anti-malware protection",
        downloads: 950000,
        downloadLink: "https://www.malwarebytes.com/"
    },
    {
        id: 142,
        name: "Kaspersky",
        category: "Security",
        description: "Antivirus software",
        downloads: 900000,
        downloadLink: "https://www.kaspersky.com/"
    },
    {
        id: 143,
        name: "ESET NOD32",
        category: "Security",
        description: "Antivirus protection",
        downloads: 850000,
        downloadLink: "https://www.eset.com/"
    },
    {
        id: 144,
        name: "Bitdefender",
        category: "Security",
        description: "Security software suite",
        downloads: 800000,
        downloadLink: "https://www.bitdefender.com/"
    },
    {
        id: 145,
        name: "Norton",
        category: "Security",
        description: "Security software",
        downloads: 850000,
        downloadLink: "https://norton.com/"
    },

    // Database Management
    {
        id: 146,
        name: "MySQL Workbench",
        category: "Development",
        description: "Database design tool",
        downloads: 800000,
        downloadLink: "https://www.mysql.com/products/workbench/"
    },
    {
        id: 147,
        name: "PostgreSQL",
        category: "Development",
        description: "Open source database",
        downloads: 750000,
        downloadLink: "https://www.postgresql.org/"
    },
    {
        id: 148,
        name: "MongoDB Compass",
        category: "Development",
        description: "MongoDB GUI",
        downloads: 700000,
        downloadLink: "https://www.mongodb.com/products/compass"
    },
    {
        id: 149,
        name: "DBeaver",
        category: "Development",
        description: "Universal database tool",
        downloads: 650000,
        downloadLink: "https://dbeaver.io/"
    },
    {
        id: 150,
        name: "SQLite Browser",
        category: "Development",
        description: "SQLite database manager",
        downloads: 600000,
        downloadLink: "https://sqlitebrowser.org/"
    },

    // System Monitoring
    {
        id: 151,
        name: "AIDA64",
        category: "Utilities",
        description: "System information tool",
        downloads: 750000,
        downloadLink: "https://www.aida64.com/"
    },
    {
        id: 152,
        name: "Speccy",
        category: "Utilities",
        description: "System information utility",
        downloads: 700000,
        downloadLink: "https://www.ccleaner.com/speccy"
    },
    {
        id: 153,
        name: "Open Hardware Monitor",
        category: "Utilities",
        description: "Hardware monitoring",
        downloads: 650000,
        downloadLink: "https://openhardwaremonitor.org/"
    },
    {
        id: 154,
        name: "Core Temp",
        category: "Utilities",
        description: "CPU temperature monitor",
        downloads: 600000,
        downloadLink: "https://www.alcpu.com/CoreTemp/"
    },
    {
        id: 155,
        name: "GPU-Z",
        category: "Utilities",
        description: "Graphics card information",
        downloads: 750000,
        downloadLink: "https://www.techpowerup.com/gpuz/"
    },

    // File Recovery
    {
        id: 156,
        name: "Recuva",
        category: "Utilities",
        description: "File recovery tool",
        downloads: 850000,
        downloadLink: "https://www.ccleaner.com/recuva"
    },
    {
        id: 157,
        name: "EaseUS Data Recovery",
        category: "Utilities",
        description: "Data recovery software",
        downloads: 800000,
        downloadLink: "https://www.easeus.com/"
    },
    {
        id: 158,
        name: "Disk Drill",
        category: "Utilities",
        description: "Data recovery tool",
        downloads: 750000,
        downloadLink: "https://www.cleverfiles.com/"
    },
    {
        id: 159,
        name: "R-Studio",
        category: "Utilities",
        description: "Data recovery software",
        downloads: 600000,
        downloadLink: "https://www.r-studio.com/"
    },
    {
        id: 160,
        name: "TestDisk",
        category: "Utilities",
        description: "Data recovery utility",
        downloads: 500000,
        downloadLink: "https://www.cgsecurity.org/wiki/TestDisk"
    },

    // Remote Access
    {
        id: 161,
        name: "Remote Desktop Connection",
        category: "Utilities",
        description: "Windows remote access",
        downloads: 900000,
        downloadLink: "https://support.microsoft.com/windows/remote-desktop-connection"
    },
    {
        id: 162,
        name: "Chrome Remote Desktop",
        category: "Utilities",
        description: "Browser-based remote access",
        downloads: 850000,
        downloadLink: "https://remotedesktop.google.com/"
    },
    {
        id: 163,
        name: "UltraVNC",
        category: "Utilities",
        description: "Remote control software",
        downloads: 600000,
        downloadLink: "https://www.uvnc.com/"
    },
    {
        id: 164,
        name: "RealVNC",
        category: "Utilities",
        description: "Remote access software",
        downloads: 700000,
        downloadLink: "https://www.realvnc.com/"
    },
    {
        id: 165,
        name: "Splashtop",
        category: "Utilities",
        description: "Remote desktop access",
        downloads: 750000,
        downloadLink: "https://www.splashtop.com/"
    },

    // Office Suites
    {
        id: 166,
        name: "Microsoft 365",
        category: "Office",
        description: "Office suite by Microsoft",
        downloads: 950000,
        downloadLink: "https://www.microsoft.com/microsoft-365"
    },
    {
        id: 167,
        name: "LibreOffice",
        category: "Office",
        description: "Free office suite",
        downloads: 900000,
        downloadLink: "https://www.libreoffice.org/"
    },
    {
        id: 168,
        name: "WPS Office",
        category: "Office",
        description: "Office software suite",
        downloads: 850000,
        downloadLink: "https://www.wps.com/"
    },
    {
        id: 169,
        name: "FreeOffice",
        category: "Office",
        description: "Free office suite",
        downloads: 700000,
        downloadLink: "https://www.freeoffice.com/"
    },
    {
        id: 170,
        name: "OnlyOffice",
        category: "Office",
        description: "Office suite",
        downloads: 650000,
        downloadLink: "https://www.onlyoffice.com/"
    },

    // File Compression
    {
        id: 171,
        name: "7-Zip",
        category: "Utilities",
        description: "File archiver",
        downloads: 950000,
        downloadLink: "https://www.7-zip.org/"
    },
    {
        id: 172,
        name: "WinRAR",
        category: "Utilities",
        description: "Compression tool",
        downloads: 900000,
        downloadLink: "https://www.win-rar.com/"
    },
    {
        id: 173,
        name: "WinZip",
        category: "Utilities",
        description: "File compression",
        downloads: 850000,
        downloadLink: "https://www.winzip.com/"
    },
    {
        id: 174,
        name: "PeaZip",
        category: "Utilities",
        description: "File archiver utility",
        downloads: 600000,
        downloadLink: "https://peazip.github.io/"
    },
    {
        id: 175,
        name: "Bandizip",
        category: "Utilities",
        description: "Compression software",
        downloads: 700000,
        downloadLink: "https://www.bandisoft.com/bandizip/"
    },

    // Screen Capture
    {
        id: 176,
        name: "Snagit",
        category: "Utilities",
        description: "Screen capture tool",
        downloads: 800000,
        downloadLink: "https://www.techsmith.com/screen-capture.html"
    },
    {
        id: 177,
        name: "Greenshot",
        category: "Utilities",
        description: "Screenshot tool",
        downloads: 700000,
        downloadLink: "https://getgreenshot.org/"
    },
    {
        id: 178,
        name: "PicPick",
        category: "Utilities",
        description: "Screen capture utility",
        downloads: 650000,
        downloadLink: "https://picpick.app/"
    },
    {
        id: 179,
        name: "FastStone Capture",
        category: "Utilities",
        description: "Screen capture software",
        downloads: 600000,
        downloadLink: "https://www.faststone.org/FSCaptureDetail.htm"
    },
    {
        id: 180,
        name: "LightShot",
        category: "Utilities",
        description: "Screenshot tool",
        downloads: 750000,
        downloadLink: "https://app.prntscr.com/"
    },

    // Game Emulators
    {
        id: 181,
        name: "RetroArch",
        category: "Gaming",
        description: "Multi-system emulator",
        downloads: 900000,
        downloadLink: "https://www.retroarch.com/"
    },
    {
        id: 182,
        name: "PCSX2",
        category: "Gaming",
        description: "PlayStation 2 emulator",
        downloads: 850000,
        downloadLink: "https://pcsx2.net/"
    },
    {
        id: 183,
        name: "Dolphin",
        category: "Gaming",
        description: "GameCube/Wii emulator",
        downloads: 800000,
        downloadLink: "https://dolphin-emu.org/"
    },
    {
        id: 184,
        name: "PPSSPP",
        category: "Gaming",
        description: "PSP emulator",
        downloads: 750000,
        downloadLink: "https://www.ppsspp.org/"
    },
    {
        id: 185,
        name: "DeSmuME",
        category: "Gaming",
        description: "Nintendo DS emulator",
        downloads: 700000,
        downloadLink: "https://desmume.org/"
    },

    // Game Modding Tools
    {
        id: 186,
        name: "Nexus Mod Manager",
        category: "Gaming",
        description: "Mod management tool",
        downloads: 850000,
        downloadLink: "https://www.nexusmods.com/"
    },
    {
        id: 187,
        name: "Vortex",
        category: "Gaming",
        description: "Mod manager",
        downloads: 800000,
        downloadLink: "https://www.nexusmods.com/about/vortex/"
    },
    {
        id: 188,
        name: "Mod Organizer 2",
        category: "Gaming",
        description: "Advanced mod manager",
        downloads: 700000,
        downloadLink: "https://www.modorganizer.org/"
    },
    {
        id: 189,
        name: "LOOT",
        category: "Gaming",
        description: "Load order optimization tool",
        downloads: 650000,
        downloadLink: "https://loot.github.io/"
    },
    {
        id: 190,
        name: "Creation Kit",
        category: "Gaming",
        description: "Bethesda modding tool",
        downloads: 600000,
        downloadLink: "https://bethesda.net/en/game/bethesda-launcher"
    },

    // Audio Tools
    {
        id: 191,
        name: "Audacity",
        category: "Multimedia",
        description: "Audio editor and recorder",
        downloads: 950000,
        downloadLink: "https://www.audacityteam.org/"
    },
    {
        id: 192,
        name: "VLC Media Player",
        category: "Multimedia",
        description: "Media player",
        downloads: 1000000,
        downloadLink: "https://www.videolan.org/"
    },
    {
        id: 193,
        name: "MusicBee",
        category: "Multimedia",
        description: "Music manager and player",
        downloads: 800000,
        downloadLink: "https://getmusicbee.com/"
    },
    {
        id: 194,
        name: "GarageBand",
        category: "Multimedia",
        description: "Music creation studio",
        downloads: 900000,
        downloadLink: "https://www.apple.com/mac/garageband/"
    },
    {
        id: 195,
        name: "Mixxx",
        category: "Multimedia",
        description: "DJ software",
        downloads: 600000,
        downloadLink: "https://mixxx.org/"
    },

    // Programming Tools
    {
        id: 196,
        name: "Git",
        category: "Development",
        description: "Version control system",
        downloads: 950000,
        downloadLink: "https://git-scm.com/"
    },
    {
        id: 197,
        name: "GitHub Desktop",
        category: "Development",
        description: "Git GUI client",
        downloads: 900000,
        downloadLink: "https://desktop.github.com/"
    },
    {
        id: 198,
        name: "Sourcetree",
        category: "Development",
        description: "Git client",
        downloads: 850000,
        downloadLink: "https://www.sourcetreeapp.com/"
    },
    {
        id: 199,
        name: "GitKraken",
        category: "Development",
        description: "Git GUI client",
        downloads: 800000,
        downloadLink: "https://www.gitkraken.com/"
    },
    {
        id: 200,
        name: "TortoiseGit",
        category: "Development",
        description: "Git shell interface",
        downloads: 750000,
        downloadLink: "https://tortoisegit.org/"
    },

    // Network Security
    {
        id: 201,
        name: "Wireshark",
        category: "Security",
        description: "Network protocol analyzer",
        downloads: 900000,
        downloadLink: "https://www.wireshark.org/"
    },
    {
        id: 202,
        name: "Nmap",
        category: "Security",
        description: "Network scanner",
        downloads: 850000,
        downloadLink: "https://nmap.org/"
    },
    {
        id: 203,
        name: "Fiddler",
        category: "Security",
        description: "Web debugging proxy",
        downloads: 800000,
        downloadLink: "https://www.telerik.com/fiddler"
    },
    {
        id: 204,
        name: "Burp Suite",
        category: "Security",
        description: "Web security testing",
        downloads: 750000,
        downloadLink: "https://portswigger.net/burp"
    },
    {
        id: 205,
        name: "Metasploit",
        category: "Security",
        description: "Penetration testing framework",
        downloads: 700000,
        downloadLink: "https://www.metasploit.com/"
    },

    // Virtual Desktop Tools
    {
        id: 206,
        name: "Dexpot",
        category: "Utilities",
        description: "Virtual desktop manager",
        downloads: 600000,
        downloadLink: "https://dexpot.de/"
    },
    {
        id: 207,
        name: "VirtuaWin",
        category: "Utilities",
        description: "Virtual desktop tool",
        downloads: 500000,
        downloadLink: "https://virtuawin.sourceforge.io/"
    },
    {
        id: 208,
        name: "BetterDesktopTool",
        category: "Utilities",
        description: "Desktop enhancement",
        downloads: 450000,
        downloadLink: "https://www.betterdesktoptool.com/"
    },
    {
        id: 209,
        name: "WindowsPager",
        category: "Utilities",
        description: "Virtual desktop pager",
        downloads: 400000,
        downloadLink: "https://windowspager.sourceforge.net/"
    },
    {
        id: 210,
        name: "Finestra",
        category: "Utilities",
        description: "Virtual desktop manager",
        downloads: 350000,
        downloadLink: "https://finestra.app/"
    },

    // Streaming Software
    {
        id: 211,
        name: "OBS Studio",
        category: "Multimedia",
        description: "Streaming and recording",
        downloads: 950000,
        downloadLink: "https://obsproject.com/"
    },
    {
        id: 212,
        name: "Streamlabs",
        category: "Multimedia",
        description: "Streaming platform",
        downloads: 900000,
        downloadLink: "https://streamlabs.com/"
    },
    {
        id: 213,
        name: "XSplit",
        category: "Multimedia",
        description: "Streaming software",
        downloads: 850000,
        downloadLink: "https://www.xsplit.com/"
    },
    {
        id: 214,
        name: "Twitch Studio",
        category: "Multimedia",
        description: "Streaming app",
        downloads: 800000,
        downloadLink: "https://www.twitch.tv/broadcast/studio"
    },
    {
        id: 215,
        name: "Lightstream",
        category: "Multimedia",
        description: "Cloud streaming platform",
        downloads: 700000,
        downloadLink: "https://www.golightstream.com/"
    },

    // File Management
    {
        id: 216,
        name: "Total Commander",
        category: "Utilities",
        description: "File manager",
        downloads: 900000,
        downloadLink: "https://www.ghisler.com/"
    },
    {
        id: 217,
        name: "Directory Opus",
        category: "Utilities",
        description: "File management tool",
        downloads: 800000,
        downloadLink: "https://www.gpsoft.com.au/"
    },
    {
        id: 218,
        name: "FreeCommander",
        category: "Utilities",
        description: "File manager",
        downloads: 700000,
        downloadLink: "https://freecommander.com/"
    },
    {
        id: 219,
        name: "Q-Dir",
        category: "Utilities",
        description: "Quad file manager",
        downloads: 600000,
        downloadLink: "https://www.softwareok.com/?seite=Freeware/Q-Dir"
    },
    {
        id: 220,
        name: "XYplorer",
        category: "Utilities",
        description: "File manager",
        downloads: 500000,
        downloadLink: "https://www.xyplorer.com/"
    },

    // Mobile Development
    {
        id: 221,
        name: "Flutter",
        category: "Development",
        description: "Cross-platform development SDK",
        downloads: 900000,
        downloadLink: "https://flutter.dev/"
    },
    {
        id: 222,
        name: "React Native",
        category: "Development",
        description: "Mobile app framework",
        downloads: 850000,
        downloadLink: "https://reactnative.dev/"
    },
    {
        id: 223,
        name: "Xamarin",
        category: "Development",
        description: "Cross-platform development",
        downloads: 800000,
        downloadLink: "https://dotnet.microsoft.com/apps/xamarin"
    },
    {
        id: 224,
        name: "Ionic",
        category: "Development",
        description: "Hybrid app framework",
        downloads: 750000,
        downloadLink: "https://ionicframework.com/"
    },
    {
        id: 225,
        name: "NativeScript",
        category: "Development",
        description: "Mobile development platform",
        downloads: 700000,
        downloadLink: "https://nativescript.org/"
    },

    // Data Science Tools
    {
        id: 226,
        name: "Anaconda",
        category: "Development",
        description: "Python data science platform",
        downloads: 900000,
        downloadLink: "https://www.anaconda.com/"
    },
    {
        id: 227,
        name: "RStudio",
        category: "Development",
        description: "R programming IDE",
        downloads: 850000,
        downloadLink: "https://www.rstudio.com/"
    },
    {
        id: 228,
        name: "Jupyter Notebook",
        category: "Development",
        description: "Interactive computing",
        downloads: 800000,
        downloadLink: "https://jupyter.org/"
    },
    {
        id: 229,
        name: "KNIME",
        category: "Development",
        description: "Data analytics platform",
        downloads: 700000,
        downloadLink: "https://www.knime.com/"
    },
    {
        id: 230,
        name: "Orange",
        category: "Development",
        description: "Data mining toolkit",
        downloads: 650000,
        downloadLink: "https://orangedatamining.com/"
    },

    // Virtualization
    {
        id: 231,
        name: "Docker Desktop",
        category: "Development",
        description: "Container platform",
        downloads: 950000,
        downloadLink: "https://www.docker.com/products/docker-desktop"
    },
    {
        id: 232,
        name: "Kubernetes",
        category: "Development",
        description: "Container orchestration",
        downloads: 900000,
        downloadLink: "https://kubernetes.io/"
    },
    {
        id: 233,
        name: "Vagrant",
        category: "Development",
        description: "Development environments",
        downloads: 850000,
        downloadLink: "https://www.vagrantup.com/"
    },
    {
        id: 234,
        name: "Podman",
        category: "Development",
        description: "Container engine",
        downloads: 800000,
        downloadLink: "https://podman.io/"
    },
    {
        id: 235,
        name: "LXC",
        category: "Development",
        description: "Linux containers",
        downloads: 700000,
        downloadLink: "https://linuxcontainers.org/"
    },

    // API Development
    {
        id: 236,
        name: "Postman",
        category: "Development",
        description: "API platform",
        downloads: 950000,
        downloadLink: "https://www.postman.com/"
    },
    {
        id: 237,
        name: "Insomnia",
        category: "Development",
        description: "API client",
        downloads: 850000,
        downloadLink: "https://insomnia.rest/"
    },
    {
        id: 238,
        name: "Swagger UI",
        category: "Development",
        description: "API documentation",
        downloads: 800000,
        downloadLink: "https://swagger.io/"
    },
    {
        id: 239,
        name: "SoapUI",
        category: "Development",
        description: "API testing tool",
        downloads: 750000,
        downloadLink: "https://www.soapui.org/"
    },
    {
        id: 240,
        name: "Paw",
        category: "Development",
        description: "API tool for Mac",
        downloads: 700000,
        downloadLink: "https://paw.cloud/"
    },

    // Cloud Development
    {
        id: 241,
        name: "AWS CLI",
        category: "Development",
        description: "Amazon Web Services CLI",
        downloads: 900000,
        downloadLink: "https://aws.amazon.com/cli/"
    },
    {
        id: 242,
        name: "Azure CLI",
        category: "Development",
        description: "Microsoft Azure CLI",
        downloads: 850000,
        downloadLink: "https://docs.microsoft.com/cli/azure/"
    },
    {
        id: 243,
        name: "Google Cloud SDK",
        category: "Development",
        description: "Google Cloud tools",
        downloads: 800000,
        downloadLink: "https://cloud.google.com/sdk"
    },
    {
        id: 244,
        name: "Terraform",
        category: "Development",
        description: "Infrastructure as code",
        downloads: 850000,
        downloadLink: "https://www.terraform.io/"
    },
    {
        id: 245,
        name: "Serverless Framework",
        category: "Development",
        description: "Serverless development",
        downloads: 800000,
        downloadLink: "https://www.serverless.com/"
    },

    // Game Development Tools
    {
        id: 246,
        name: "Blender",
        category: "Development",
        description: "3D creation suite",
        downloads: 950000,
        downloadLink: "https://www.blender.org/"
    },
    {
        id: 247,
        name: "GameMaker Studio",
        category: "Development",
        description: "Game development engine",
        downloads: 850000,
        downloadLink: "https://www.yoyogames.com/gamemaker"
    },
    {
        id: 248,
        name: "RPG Maker",
        category: "Development",
        description: "RPG game creator",
        downloads: 800000,
        downloadLink: "https://www.rpgmakerweb.com/"
    },
    {
        id: 249,
        name: "Construct",
        category: "Development",
        description: "2D game engine",
        downloads: 750000,
        downloadLink: "https://www.construct.net/"
    },
    {
        id: 250,
        name: "LÖVE",
        category: "Development",
        description: "2D game framework",
        downloads: 700000,
        downloadLink: "https://love2d.org/"
    },

    // Database Tools
    {
        id: 251,
        name: "Redis Desktop Manager",
        category: "Development",
        description: "Redis GUI client",
        downloads: 800000,
        downloadLink: "https://redisdesktop.com/"
    },
    {
        id: 252,
        name: "Robo 3T",
        category: "Development",
        description: "MongoDB GUI",
        downloads: 750000,
        downloadLink: "https://robomongo.org/"
    },
    {
        id: 253,
        name: "pgAdmin",
        category: "Development",
        description: "PostgreSQL Tools",
        downloads: 850000,
        downloadLink: "https://www.pgadmin.org/"
    },
    {
        id: 254,
        name: "HeidiSQL",
        category: "Development",
        description: "SQL client",
        downloads: 700000,
        downloadLink: "https://www.heidisql.com/"
    },
    {
        id: 255,
        name: "DataGrip",
        category: "Development",
        description: "Database IDE",
        downloads: 800000,
        downloadLink: "https://www.jetbrains.com/datagrip/"
    },

    // Web Design Tools
    {
        id: 256,
        name: "Adobe XD",
        category: "Design",
        description: "UI/UX design tool",
        downloads: 900000,
        downloadLink: "https://www.adobe.com/products/xd.html"
    },
    {
        id: 257,
        name: "Figma",
        category: "Design",
        description: "Collaborative design",
        downloads: 950000,
        downloadLink: "https://www.figma.com/"
    },
    {
        id: 258,
        name: "Sketch",
        category: "Design",
        description: "Digital design tool",
        downloads: 850000,
        downloadLink: "https://www.sketch.com/"
    },
    {
        id: 259,
        name: "InVision",
        category: "Design",
        description: "Digital product design",
        downloads: 800000,
        downloadLink: "https://www.invisionapp.com/"
    },
    {
        id: 260,
        name: "Zeplin",
        category: "Design",
        description: "Design collaboration",
        downloads: 750000,
        downloadLink: "https://zeplin.io/"
    },

    // Music Production
    {
        id: 261,
        name: "Logic Pro X",
        category: "Multimedia",
        description: "Professional music production",
        downloads: 850000,
        downloadLink: "https://www.apple.com/logic-pro/"
    },
    {
        id: 262,
        name: "Cubase",
        category: "Multimedia",
        description: "Music production software",
        downloads: 800000,
        downloadLink: "https://www.steinberg.net/cubase/"
    },
    {
        id: 263,
        name: "Reaper",
        category: "Multimedia",
        description: "Digital audio workstation",
        downloads: 750000,
        downloadLink: "https://www.reaper.fm/"
    },
    {
        id: 264,
        name: "Ardour",
        category: "Multimedia",
        description: "Digital audio workstation",
        downloads: 600000,
        downloadLink: "https://ardour.org/"
    },
    {
        id: 265,
        name: "Cakewalk",
        category: "Multimedia",
        description: "Music production software",
        downloads: 700000,
        downloadLink: "https://www.bandlab.com/products/cakewalk"
    },

    // Network Tools
    {
        id: 266,
        name: "NetLimiter",
        category: "Utilities",
        description: "Internet traffic control",
        downloads: 700000,
        downloadLink: "https://www.netlimiter.com/"
    },
    {
        id: 267,
        name: "GlassWire",
        category: "Utilities",
        description: "Network monitoring",
        downloads: 800000,
        downloadLink: "https://www.glasswire.com/"
    },
    {
        id: 268,
        name: "LAN Speed Test",
        category: "Utilities",
        description: "Network speed testing",
        downloads: 600000,
        downloadLink: "https://totusoft.com/lanspeed/"
    },
    {
        id: 269,
        name: "NetBalancer",
        category: "Utilities",
        description: "Network traffic control",
        downloads: 550000,
        downloadLink: "https://netbalancer.com/"
    },
    {
        id: 270,
        name: "NetworkMiner",
        category: "Utilities",
        description: "Network forensic tool",
        downloads: 500000,
        downloadLink: "https://www.netresec.com/"
    },

    // System Backup
    {
        id: 271,
        name: "Acronis True Image",
        category: "Utilities",
        description: "Backup software",
        downloads: 850000,
        downloadLink: "https://www.acronis.com/"
    },
    {
        id: 272,
        name: "AOMEI Backupper",
        category: "Utilities",
        description: "System backup tool",
        downloads: 800000,
        downloadLink: "https://www.aomeitech.com/backupper.html"
    },
    {
        id: 273,
        name: "Veeam",
        category: "Utilities",
        description: "Backup solution",
        downloads: 750000,
        downloadLink: "https://www.veeam.com/"
    },
    {
        id: 274,
        name: "Paragon Backup",
        category: "Utilities",
        description: "Backup software",
        downloads: 650000,
        downloadLink: "https://www.paragon-software.com/"
    },
    {
        id: 275,
        name: "Duplicati",
        category: "Utilities",
        description: "Free backup software",
        downloads: 600000,
        downloadLink: "https://www.duplicati.com/"
    },

    // Password Managers
    {
        id: 276,
        name: "1Password",
        category: "Security",
        description: "Password management",
        downloads: 900000,
        downloadLink: "https://1password.com/"
    },
    {
        id: 277,
        name: "LastPass",
        category: "Security",
        description: "Password manager",
        downloads: 950000,
        downloadLink: "https://www.lastpass.com/"
    },
    {
        id: 278,
        name: "Dashlane",
        category: "Security",
        description: "Password manager",
        downloads: 850000,
        downloadLink: "https://www.dashlane.com/"
    },
    {
        id: 279,
        name: "RoboForm",
        category: "Security",
        description: "Password manager",
        downloads: 750000,
        downloadLink: "https://www.roboform.com/"
    },
    {
        id: 280,
        name: "NordPass",
        category: "Security",
        description: "Password manager",
        downloads: 700000,
        downloadLink: "https://nordpass.com/"
    },

    // Video Converters
    {
        id: 281,
        name: "Handbrake",
        category: "Multimedia",
        description: "Video transcoder",
        downloads: 900000,
        downloadLink: "https://handbrake.fr/"
    },
    {
        id: 282,
        name: "Any Video Converter",
        category: "Multimedia",
        description: "Video converter",
        downloads: 850000,
        downloadLink: "https://www.any-video-converter.com/"
    },
    {
        id: 283,
        name: "Format Factory",
        category: "Multimedia",
        description: "Media converter",
        downloads: 800000,
        downloadLink: "http://www.pcfreetime.com/"
    },
    {
        id: 284,
        name: "XMedia Recode",
        category: "Multimedia",
        description: "Media converter",
        downloads: 700000,
        downloadLink: "https://www.xmedia-recode.de/"
    },
    {
        id: 285,
        name: "WinFF",
        category: "Multimedia",
        description: "Video converter",
        downloads: 600000,
        downloadLink: "https://www.biggmatt.com/winff/"
    },

    // System Cleaners
    {
        id: 286,
        name: "CCleaner",
        category: "Utilities",
        description: "System optimization",
        downloads: 950000,
        downloadLink: "https://www.ccleaner.com/"
    },
    {
        id: 287,
        name: "BleachBit",
        category: "Utilities",
        description: "System cleaner",
        downloads: 850000,
        downloadLink: "https://www.bleachbit.org/"
    },
    {
        id: 288,
        name: "System Ninja",
        category: "Utilities",
        description: "PC cleaning tool",
        downloads: 750000,
        downloadLink: "https://singularlabs.com/software/system-ninja/"
    },
    {
        id: 289,
        name: "Wise Disk Cleaner",
        category: "Utilities",
        description: "Disk cleanup tool",
        downloads: 700000,
        downloadLink: "https://www.wisecleaner.com/wise-disk-cleaner.html"
    },
    {
        id: 290,
        name: "PrivaZer",
        category: "Utilities",
        description: "Privacy cleaner",
        downloads: 650000,
        downloadLink: "https://privazer.com/"
    }
];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const softwareGrid = document.getElementById('softwareGrid');
const categoryButtons = document.querySelectorAll('.category-btn');
const loadingElement = document.getElementById('loading');
const scrollTopButton = document.getElementById('scrollTop');
const toast = document.getElementById('toast');
const cardTemplate = document.getElementById('software-card-template');

// State
let currentCategory = 'all';
let searchTerm = '';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderSoftware();
    initializeEventListeners();
});

// Event Listeners
function initializeEventListeners() {
    // Search
    searchInput.addEventListener('input', debounce(() => {
        searchTerm = searchInput.value.toLowerCase();
        renderSoftware();
    }, 300));

    // Category Filter
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentCategory = button.dataset.category;
            renderSoftware();
        });
    });

    // Scroll to Top
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopButton.classList.add('visible');
        } else {
            scrollTopButton.classList.remove('visible');
        }
    });

    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Render Software
function renderSoftware() {
    showLoading();
    
    const filteredSoftware = softwareData.filter(software => {
        const matchesSearch = software.name.toLowerCase().includes(searchTerm) ||
                            software.description.toLowerCase().includes(searchTerm);
        const matchesCategory = currentCategory === 'all' || software.category === currentCategory;
        return matchesSearch && matchesCategory;
    });

    softwareGrid.innerHTML = '';

    if (filteredSoftware.length === 0) {
        showNoResults();
        hideLoading();
        return;
    }

    filteredSoftware.forEach(software => {
        const card = createSoftwareCard(software);
        softwareGrid.appendChild(card);
    });

    hideLoading();
}

// Create Software Card
function createSoftwareCard(software) {
    const card = cardTemplate.content.cloneNode(true);
    
    const iconUrl = `https://icon.horse/icon/${new URL(software.downloadLink).hostname}`;
    card.querySelector('.software-icon').src = iconUrl;
    card.querySelector('h3').textContent = software.name;
    card.querySelector('.description').textContent = software.description;
    card.querySelector('.downloads-count span').textContent = formatDownloads(software.downloads);
    card.querySelector('.download-btn').href = software.downloadLink;

    return card;
}

// Utility Functions
function showLoading() {
    loadingElement.classList.add('active');
}

function hideLoading() {
    loadingElement.classList.remove('active');
}

function showNoResults() {
    softwareGrid.innerHTML = `
        <div class="no-results">
            <i class="fas fa-search fa-3x"></i>
            <p>Нічого не знайдено</p>
        </div>
    `;
}

function formatDownloads(downloads) {
    if (downloads >= 1000000) {
        return (downloads / 1000000).toFixed(1) + 'M завантажень';
    } else if (downloads >= 1000) {
        return (downloads / 1000).toFixed(1) + 'K завантажень';
    }
    return downloads + ' завантажень';
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function showToast(message, duration = 3000) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}
