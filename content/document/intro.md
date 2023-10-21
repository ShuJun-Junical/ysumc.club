---
title: 服务器部署
subtitle: 网络服务器服务器
description: 本教程是建立在您已经能够架设一个Minecraft Java版服务器的基础上进行教学的，在本篇中，我们会深入讨论群组、模组服、生电服架设，MCDR、MCSM等守护进程的使用，Java优化，报错解决等各方面的Minecraft Java版服务器运维知识。
date: 2023-09-18
toc: false
image: /path/of/image.png
cover: /path/of/cover/image.png
tag:
---

## 引语

本教程是**建立在您已经能够架设一个Minecraft Java版服务器的基础**上进行教学的，在本篇中，我们会深入讨论群组、模组服、生电服架设，MCDR、MCSM等守护进程的使用，Java优化，报错解决等各方面的Minecraft Java版服务器运维知识。

**如果您还无法独立架设一个Minecraft Java版服务器，请先阅读基础篇的相关知识**，在进阶篇中我们将**不再**讨论基础的技术细节。您可以通过目录查找您需要的技术教程。

此外，编者水平有限，难免会出现错误和遗漏，如果您发现任何问题，或者您有任何其他的教程希望我们推出，都可以随时联系我们。

当然，有任何问题您也可以随时在MUA各群聊中询问，我们非常乐意提供咨询和技术援助。

注：本篇将以篇章为单位持续更新，每篇的编者和参考资料都会附在最后，如果有需要可以自行查看

## 为服务器配置外置登录

外置登录是能够截取正版登录的验证方式，并允许服务器管理者自行验证玩家账户可信度的方案，目前外置登录的主流方案是[authlib-injector](https://github.com/yushijinhun/authlib-injector)，目前MUA联合认证使用的也是此方案，本篇教程将会教学如何为服务器配置[authlib-injector](https://github.com/yushijinhun/authlib-injector)。

您需要拥有服务器的完整管理权限，包括对启动参数进行修改

此外您需要搭建自己的皮肤站以提供验证（如果您高校没有自己的皮肤站，可以使用[MUA官方皮肤站](skin.mualliance.ltd)统一认证），皮肤站搭建教程见此处

1.  第一步，关闭正在运行的服务器，如果您还没有搭建服务器请查看基础篇教程
2.  下载最新版本的[authlib-injector](https://github.com/yushijinhun/authlib-injector/releases)
3.  将下载下来的authlib-injector移动至与服务端JAR文件同级的目录下
4.  在启动参数中添加如下内容`-javaagent:{authlib-injector.jar 的路径}={验证服务器 URL (API 地址)}`，并且为服务器开启正版验证（代理端仅仅只需要在代理端开启，但子服都应当安装authlib-injector并添加至启动参数）
5.  最后，启动服务器，外置登录就可以使用了

例如您需要使用MUA验证，那么服务器参数就应该使用如下案例：

```plaintext
java -javaagent:authlib-injector-1.2.3.jar=https://skin.mualliance.ltd/api/union/yggdrasil -jar server.jar nogui
```

当然，开发者也提供了一些可以添加的参数，他们额外增加了别的功能。您可以自己选择并修改。

```plaintext
-Dauthlibinjector.noLogFile
   不要将日志输出到文件.
   默认情况下, authlib-injector 会将日志输出到控制台以及当前目录下的 authlib-injector.log 文件.
   开启此选项后, 日志仅会输出到控制台.

   需要注意的是, authlib-injector 的日志是不会输出到 Minecraft 服务端/客户端的日志文件中的.

   每次启动时, 日志文件都会被清空. 如果有多个进程使用同一个日志文件, 则只有最早启动的会成功打开日志文件.

-Dauthlibinjector.mojangNamespace={default|enabled|disabled}
   设置是否启用 Mojang 命名空间 (@mojang 后缀).
   若验证服务器未设置 feature.no_mojang_namespace 选项, 则该功能默认启用.

   启用后, 则可以使用名为 <username>@mojang 的虚拟角色来调用对应正版角色的皮肤.
   例如,
    - /give @p minecraft:skull 1 3 {SkullOwner:"Notch@mojang"}
    - /npc skin Notch@mojang
   显示的将会是 Notch 的皮肤.

   注意, 虚拟角色和对应正版角色的 UUID 是不同的. 为了将虚拟角色和正版角色区别开,
   虚拟角色 UUID 中 time_hi_and_version 字段的最高位被置为 1 (见 RFC 4122 4.1.3 章节).
   例如:
     069a79f4-44e9-4726-a5be-fca90e38aaf5 Notch
     069a79f4-44e9-c726-a5be-fca90e38aaf5 Notch@mojang
   采用该方法的原因是, 在 RFC 4122 中 UUID 版本号只有 6 种可能的取值 (0~5), 版本号的最高位始终为 0.
   而实际上, Mojang 使用的是版本 4 (随机) UUID, 因此其对应的虚拟角色的 UUID 版本号为 12.

-Dauthlibinjector.mojangProxy={代理服务器 URL}
   设置访问 Mojang 验证服务时使用的代理, 目前仅支持 SOCKS 协议.
   URL 格式: socks://<host>:<port>

   这一代理仅作用于 Mojang 命名空间 功能, 其仅用于访问 Mojang 服务器.
   若要在访问自定义验证服务器时使用代理, 请参考 https://docs.oracle.com/javase/8/docs/technotes/guides/net/proxies.html .

-Dauthlibinjector.legacySkinPolyfill={default|enabled|disabled}
   是否启用旧式皮肤 API polyfill, 即 'GET /skins/MinecraftSkins/{username}.png'.
   若验证服务器未设置 feature.legacy_skin_api 选项, 则该功能默认启用.

-Dauthlibinjector.debug (等价于 -Dauthlibinjector.debug=verbose,authlib)
或 -Dauthlibinjector.debug={调试选项; 逗号分隔}
   可用的调试选项:
    - verbose             详细日志
    - authlib             开启 Mojang authlib 的调试输出
    - dumpClass           转储修改过的类
    - printUntransformed  打印已分析但未修改的类; 隐含 verbose

-Dauthlibinjector.ignoredPackages={包列表; 逗号分隔}
   忽略指定的包, 其中的类将不会被分析或修改.

-Dauthlibinjector.disableHttpd
   禁用内建的 HTTP 服务器.
   以下依赖内建 HTTP 服务器的功能将不可用:
    - Mojang 命名空间
    - 旧式皮肤 API polyfill

-Dauthlibinjector.httpdPort={端口号}
   设置内置 HTTP 服务器使用的端口号, 默认为 0 (随机分配).

-Dauthlibinjector.noShowServerName
   不要在 Minecraft 主界面展示验证服务器名称.
   默认情况下, authlib-injector 通过更改 --versionType 参数来在 Minecraft 主界面显示验证服务器名称, 使用本选项可以禁用该功能.

-Dauthlibinjector.mojangAntiFeatures={default|enabled|disabled}
   设置是否开启 Minecraft 的部分 anti-feature.
   若验证服务器未设置 feature.enable_mojang_anti_features 选项, 则默认禁用.

 Minecraft 的 anti-feature 包括:
    - Minecraft 服务器屏蔽列表
    - 查询用户权限的接口, 涵盖以下项目:
      * 聊天权限 (禁用后默认允许)
      * 多人游戏权限 (禁用后默认允许)
      * 领域权限 (禁用后默认允许)
      * 遥测 (禁用后默认关闭)
      * 冒犯性内容过滤 (禁用后默认关闭)

-Dauthlibinjector.profileKey={default|enabled|disabled}
   是否启用消息签名密钥对功能, 这一功能在 22w17a 引入, 用于多人游戏中聊天消息的数字签名.
   启用此功能后, Minecraft 会向 /minecraftservices/player/certificates 发送 POST 请求, 以获取由验证服务器颁发的密钥对.
   此功能需要验证服务器支持, 若验证服务器未设置 feature.enable_profile_key 选项, 则该功能默认禁用.

-Dauthlibinjector.usernameCheck={default|enabled|disabled}
   是否启用玩家用户名检查, 若禁用, 则 authlib-injector 将关闭 Minecraft、BungeeCord 和 Paper 的用户名检查功能.
   若验证服务器未设置 feature.usernameCheck 选项, 则默认禁用.
   注意, 开启此功能将导致用户名包含非英文字符的玩家无法进入服务器.
```

本篇编者：JianMoOvO

参考资料：

1.  authlib-injector官方文档：[https://github.com/yushijinhun/authlib-injector](https://github.com/yushijinhun/authlib-injector)

## 架设生电服（Velocity+MCDR+Fabric）

本篇内容将讲解如何架设一个包含生存，创造以及镜像的Minecraft Fabric服务端，这类服务端搭建的服务器常常被称作生电服，它为红石技术提供了一些方便的功能，同时我们将使用MCDR作为守护进程，这个程序在不修改Minecraft的基础上提供了一些好用的功能。

### 架设Fabric服务器

首先我们需要搭建一个Fabric服务器，您可以在[这里](https://fabricmc.net/use/server/)获取到所有版本的Fabric服务端安装器。

编者这里采用的是Minecraft 1.20.1，Fabric Loader Version 0.14.22，Installer Version 0.11.2。

版本不同操作步骤大致类似，选择好版本点击界面上的按键即可。如果您需要更旧的版本或是开发版本可以点击下方的`Download installer for older versions or manual installation，`但是我们推荐您使用最新的版本，旧版本和开发版可能会导致一些不必要的错误。

![](/技术/advance1.2.1.png)

和基础篇一样，将服务端放在一个独立的文件夹中，编者将其命名为`survival`，这将作为我们的生存主服

随后编写一个启动脚本，启动服务端，当然您也可以指定一些JVM参数。

注：这里大概率需要魔法上网，编者也没下载下来…..找的朋友帮忙下载的。在安装中遇到问题请访问Fabric官方WIKI，这里有更详细的安装方法：[https://fabricmc.net/wiki/install](https://fabricmc.net/wiki/install)

（如果您对这部分内容存在疑问，请阅读[基础篇](https://docs.mualliance.cn/zh/dev/base)）

```plaintext
java -jar <服务端名称>.jar
```

下载完成后，你应该会得到这些文件，同意`eula.txt`之后，请先**不要**重新启动，建立一个`server`文件夹，将你的`survival`文件夹进去，同时将这些文件复制两份，将文件夹命名为`creative`和`mirror`，这些文件会分别作为你的生存，创造以及镜像服的文件。

![](/技术/advance.1.2.2.png)

![](/技术/advance.1.2.3.png)

然后我们来安装一些Mod（此列表的Mod为推荐安装的Mod，请根据你的需要挑选，不在此列表的Mod也可以安装，但请注意客户端是否能够直接访问）

| Mod                                  | 描述                                                                                                                                                                                                                                               | 地址                                       |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| FabricProxy<br><br>（必须安装）      | 这个模组可以用于联接群组服，支持BungeeCord和Velocity<br><br>1.14客户端和服务端都需要安装，1.14.1及以上版本仅服务端安装。<br><br>如果启用了Velocity支持，则必须设置secret<br><br>要求与Velocity中的velocity.toml文件内forwarding-secret的数值相同。 | [🌏](https://www.mcmod.cn/class/1699.html) |
| FabricProxy-Lite<br><br>（必须安装） | FabricProxy停更后的替代品，仅支持Velocity<br><br>并使用Fabric-API处理Velocity数据包<br><br>与FabricProxy二者任选其一即可                                                                                                                           | [🌏](https://www.mcmod.cn/class/5112.html) |
| Fabric API<br><br>（必须安装）       | Fabric 由 Fabric-loom , Fabric-Loader 和 Fabric API 组成<br><br>其中 Fabric-Loader 是最基础的组件；<br><br>大多数情况下需要同时安装 Loader 和 API                                                                                                  | [🌏](https://www.mcmod.cn/class/3124.html) |
| C^2M-Engine                          | C^2M 引擎 是一个 Fabric 模组，旨在提高 Minecraft 区块的性能<br><br>具体化那便是对区块的生成，I/O，加载优化。                                                                                                                                       | [🌏](https://www.mcmod.cn/class/3511.html) |
| Carpet                               | 地毯端对游戏进行了一些改动，让你能更好的控制游戏内容，并且能更好的理解发生了什么。移除了游戏中一些烦人的bug，提高了游戏的运行效率。<br><br>在不影响游戏正常运行的情况下，地毯端提供了一些可选的游戏特性或者原版特性缺少的内容。                    | [🌏](https://www.mcmod.cn/class/2361.html) |
| Carpet-extra                         | 为地毯端添加了更多功能。                                                                                                                                                                                                                           | [🌏](https://www.mcmod.cn/class/3325.html) |
| Plusls Carpet Addition               | 这是一个Carpet mod的扩展 mod。PCA 同步协议是一个用于在服务端和客户端之间同步 Entity，BlockEntity 的协议。                                                                                                                                          | [🌏](https://www.mcmod.cn/class/4197.html) |
| Krypton                              | Krypton 是一个 Fabric mod，试图优化Minecraft网络堆栈。                                                                                                                                                                                             | [🌏](https://www.mcmod.cn/class/3399.html) |
| LazyDFU                              | LazyDFU 是一个优化mod，它使DataFixerUpper的初始化变得“懒惰”── 也就是说，它不会立即创建将数据从旧版本的Minecraft迁移到新版本所需的规则，直到它实际需要这样做。**_它不直接修改DFU，故应该能够安全使用，但毕竟还是做出了修改，还请多加小心。_**       | [🌏](https://www.mcmod.cn/class/3407.html) |
| Starlight                            | 由 Tuinity 作者 Leaf 开发的光照优化 Fabric & Forge 通用Mod，对 MOJANG 的光照代码进行了完整的重写。                                                                                                                                                 | [🌏](https://www.mcmod.cn/class/3303.html) |
| Lithium                              | Lithium 是一个免费且开源的优化模组，与其它优化模组不同，Lithium 致力于着一个标准，即**在不修改原版机制的前提下做出更多的优化改进**，如果你想获取更激进一点的优化，可以考虑安装。                                                                   | [🌏](https://www.mcmod.cn/class/2292.html) |
| Syncmatica                           | Syncmatica 模组可以使你在服务器中与其他安装了 Syncmatica 模组的玩家一起共享[投影](https://www.mcmod.cn/class/2261.html)模组的原理图及其位置。                                                                                                      | [🌏](https://www.mcmod.cn/class/6842.html) |
| ViaFabric                            | ViaVersion 是一款基于服务器的插件，配合 ViaBackwards 和 ViaRewind 可以做到从 1.7.X 到最新版的 MC 客户端都可以连接你的服务器。                                                                                                                      | [🌏](https://www.mcmod.cn/class/3327.html) |
| ViaBackwards                         | ViaBackwards 是一款多平台的服务器插件，依赖 ViaVersion ；配合 ViaRewind 可以做到从 1.7.X-1.20 都可以连接你的服务器。                                                                                                                               | [🌏](https://www.mcmod.cn/class/5762.html) |

Carpet存在大量提供不同功能的附属，编者在此不一一列出，此外，本列表中的Mod仅仅**只是推荐**安装，如果您存在其他需求，也可以自行安装其它Mod，如果您不确定这些Mod的作用，也可以寻求技术人员的帮助。

编者在此安装了如下的这些Mod：

![](/技术/advance.1.2.4.png)

注意，这些Mod同样需要复制到Mirror和Creative文件夹中，同时，我们推荐您为Mirror和Creative安装[WorldEdit](https://www.mcmod.cn/class/609.html)，这对大量编辑方块非常有帮助。

此外我们推荐您将创造和镜像的默认模式设置为`Creative`，并且为创造主世界生成超平坦或者虚空世界，方便进行建设

**注：即使是列表的这些Mod，也可能存在兼容性问题，并且他们可能拥有各自的前置，请自行安装**

### 使用Velocity搭建群组服

下一步我们将使用[Velocity](https://papermc.io/downloads/velocity)将这些服务器连接起来，使得玩家可以自由切换。

下载最新版本的[Velocity](https://papermc.io/downloads/velocity)并且在你的服务器文件夹下新建一个`Velocity`文件夹，然后启动他。

启动方式与正常的服务器并无不同，你可以编写一个启动脚本启动他，但代理段所需的内存非常小，除非你需要安装大量插件，不然你只需要分给他`512M`的内存即可。

第一次启动过后，服务端会自动生成如下的文件

![](/技术/advanced.1.2.5.png)

`lang`文件夹中存放了语言文件，后缀为`zh_CN`的即为简体中文。

`logs`为启动日志，`plugins`为插件文件夹。

我们需要重点关注的是`velocity.toml`和`forwarding.secret`，前者是代理端配置文件，后者则是自动生成的连接密钥，用任意的文本编辑器（如记事本）就可以打开这两个文件。

我们先来关注`velocity.toml`的配置，这里我们将注释全部翻译，你可以根据需要修改！

```plaintext
配置文件版本 2023/8/13
# 配置文件版本，请勿修改！
config-version = "2.6"

# 你需要将代理端口绑定在哪个端口上，默认为25577（注意玩家最后是通过这个端口访问你的服务器的）
# 前面的IP设置为0.0.0.0代表对所有来源的IP开放，除非有多张网卡需要绑定，一般无需更改
bind = "0.0.0.0:25577"

# 服务器MOTD，显示在连接页，支持MiniMessage变量
motd = "<#09add3>A Velocity Server"

# 显示在连接页的服务器最大玩家数，不代表真实玩家数量
show-max-players = 500

# 是否开启正版验证
online-mode = true

# 是否强制使用密钥验证，如果开启，下游服务器必须有密钥才可以连入代理端
force-key-authentication = true

# 防止客户端代理连接，这可以让一些使用VPN的客户端无法连入
prevent-client-proxy-connections = false

# 我们应该传递IP地址或者其他信息到下游服务器吗？
# 可选项
# - "none":       不传递，所有玩家连接至代理端后被分配一个离线的UUID
# - "legacy":      以旧BungeeCord的标准传递玩家的UUID和IP，在1.12以下的版本的服务器使用这个选项
# - "bungeeguard": 传递玩家的IP和ID以兼容BungeeCord的方式，包括插件，如果你使用的的是1.12的版本可能无法完善网络防火墙设置，或者影响共享域名
# - "modern":      使用Velocity原生的传递方式，将传递玩家数据和UUIDs作为处理连接进程的一部分。
仅用于1.13或者更高版本的Minecraft。
player-info-forwarding-mode = "NONE"

# 如果你使用的是 modern 或者 BungeeGuard 的IP传递方式，在这里配置一个包含独特密钥的文件
# 这个密钥应使用UTF-8编码并且不是空的（应该会自动生成一份在服务器根目录）
forwarding-secret-file = "forwarding.secret"

# 广播你的服务器是否支持Forge，如果你开设了一个加入mod的服务器，建议打开
# 如果你的网络需要发送整合包的内容，建议将 ping-passthrough 的路径指向 "mods"以获得连接界面更好的显示
announce-forge = false

# 如果打开（默认是关闭的）同时代理端开启了正版验证，那么服务器就会踢出连接进程堵塞的玩家
kick-existing-players = false

# 服务器列表是否显示后端服务器的延迟
# 可选的选项：
# - "disabled":    不会进行传递。初始服务器的 velocity.toml 和 server-icon.png将决定列表ping的响应。
# - "mods":        仅从您的后端服务器传递mod列表到响应中。您的服务器列表中的第一个服务器（或强制域名）的mod列表将被使用。如果无法联系到任何后端服务器，Velocity不会显示任何mod信息。
# - "description": 使用来自后端服务器的描述和mod列表。服务器列表中的第一个服务器（或强制域名）响应将用于描述和mod列表。
# - "all":         使用后端服务器的响应作为代理响应。如果无法联系到任何服务器，则使用Velocity的配置。
ping-passthrough = "DISABLED"

# 如果未启用（默认为true），玩家的IP地址将在日志中被替换为<ip address withheld>
enable-player-address-logging = true

[servers]
# 在此配置您的服务器。每个键代表服务器的名称，值代表要连接的服务器的IP地址。
#下面是一些范例，可以使用远程服务器地址
survival = "127.0.0.1:30001"
creative = "127.0.0.1:30002"
mirror = "127.0.0.1:30003"

# 当玩家登录或从服务器被踢出时，我们应该优先连接哪些服务器。
try = [
  "survival","creative"
]

[forced-hosts]
# 在此配置您的强制域名。
"lobby.example.com" = [
  "lobby"
]
"factions.example.com" = [
  "factions"
]
"minigames.example.com" = [
  "minigames"
]

[advanced]
# 一个Minecraft数据包需要多大才进行压缩。将此设置为零将压缩所有数据包，将其设置为-1将完全禁用压缩。
compression-threshold = 256

# 压缩应该完成的程度（从0-9）。默认值为-1
compression-level = -1

# 客户端在上次连接后多快（以毫秒为单位）被允许连接？
# 默认为三秒。通过将此设置为0来禁用它。
login-ratelimit = 3000

# 在此指定连接超时的自定义超时。默认为五秒。
connection-timeout = 5000

# 在此指定连接的读取超时。默认为30秒。
read-timeout = 30000

# 启用与HAProxy的PROXY协议的兼容性。如果您不知道这是用来做什么的，那么不要启用它。
haproxy-protocol = false

# 在代理上启用TCP快速打开支持。需要代理在Linux上运行。
tcp-fast-open = false

# 在Velocity上启用BungeeCord插件消息通道支持。
bungee-plugin-message-channel = true

# 显示来自客户端的代理ping请求。
show-ping-requests = false

# 默认情况下，当用户意外地与服务器失去连接而没有明确的断开连接消息时，Velocity将尝试优雅地处理情况，通过尝试将用户回退，除非在读取超时的情况下。BungeeCord将断开用户的连接。您可以禁用此设置以使用BungeeCord的行为。
failover-on-unexpected-server-disconnect = true

# 向1.13+客户端声明代理命令。
announce-proxy-commands = true

# 启用命令的日志记录
log-command-executions = false

# 启用玩家连接到代理、切换服务器时的日志记录以及从代理断开连接。
log-player-connections = true

[query]
# 是否启用对GameSpy 4查询响应的响应。
enabled = false

# 如果开启查询，哪个端口应当用来监听查询协议
port = 25577

# 这个map名会被反馈给查询回复
map = "Velocity"

# 插件是否显示在查询回复中
show-plugins = false
```

需要特别注意的是`[servers]`和`bind`两个配置项，编者将Velocity端口绑定在30000，生存，创造和镜像则分别配置在30001、30002、30003。别的选项您可以按需配置，此外，如果后端服务器版本差异过大，请注意配置`ping-passthrough` 。

随后你就可以保存配置并启用代理端了，BungeeCord的流程类似。

而在后端的服务器，即生存，创造，镜像中，你只需要将`server.properties`文件中的`server-port`配置为你在`Velocity.toml`中配置的端口，`server-ip`配置为`127.0.0.1`即可（注:`127.0.0.1`仅本地网络中的电脑可以访问，配置为`0.0.0.0`则公网可访问，指定ip则多用于网卡绑定，我们一般**推荐仅开放代理端至公网**，再由代理端连接至后端子服务器，这样做可以大大提高网络安全性）

然后，你需要将代理端forwarding.secret文件中生成的密钥，复制到下游服务端的config/FabricProxy-Lite.toml中的secret处，这将帮助服务器验证客户端的连接是否可信。

最后，启动所有的子服务器，然后你就可以通过连接代理端端口进入服务器，并使用`/server`命令切换服务器了。

![](/技术/advance.1.2.7.png)

### 使用MCDR作为守护进程托管服务器

[MCDReforged](https://github.com/Fallen-Breath/MCDReforged)是一个可以在完全不对 Minecraft 服务端进行修改的情况下，通过可自定义的插件系统，提供对服务端的管理能力的工具。

作者为其提供了完整的上手教程，请在[这里](https://mcdreforged.readthedocs.io/zh_CN/latest/index.html)查看

小至计算器、高亮玩家、b 站弹幕姬，大至操控计分板、管理结构文件、自助备份回档，都可以通过 MCDR 及相配套的插件实现

插件仓库见：[https://github.com/MCDReforged/PluginCatalogue](https://github.com/MCDReforged/PluginCatalogue)

参考资料：

1、Paper官方文档：[https://docs.papermc.io/](https://docs.papermc.io/)

2、MCDR官方文档：[https://mcdreforged.readthedocs.io/zh_CN/latest/index.html](https://mcdreforged.readthedocs.io/zh_CN/latest/index.html)

本篇编者：JianMoOvO

## 通过JVM参数优化服务器

本篇内容可以帮助你使用同样的内存，让服务器可以承载更多玩家。

Java 语言在 JVM 的基础上隐藏了很多细节，从而让程序更关注功能而非性能。而JVM提供了很多参数选项帮助我们进行调优，通过改变这些参数，我们的Minecraft可以增加内存的使用效率，使得服务器可以承载更多玩家，**对JVM内存的系统级的调优主要的目的是减少GC的频率和Full GC的次数。**

**一些名词解释：**

GC：垃圾收集的意思(Garbage Collection)

JVM ：Java Virtual Machine，Java虚拟机，所有Java程序都是划分出一定内存运行虚拟机，程序在虚拟机中执行，这也是Java语言可以跨平台的主要原因，任何一个能够安装JVM的设备都可以运行同一套代码编译成的Java程序

G1GC：类似的名词都为GC其中的一种。

JDK：Java Development Kit，Java开发工具包，包括了开发和运行Java程序的所有内容。不同厂家开发的JDK在实际的性能表现上存在一定区别。

### 原理分析

本段难度较高，如果看不懂可以直接跳到实际应用上.

通过对OpenJ9 和其他使用 G1 的 HotSpot 的五种JVM的测试，我们得到如下数据：

|              |            |            |             |               |            |
| ------------ | ---------- | ---------- | ----------- | ------------- | ---------- |
|              | OpenJDK    | Temurin    | IBM Semeru  | Azul Zulu JDK | Azul Zing  |
| Chunky 用时  | 8 分 59 秒 | 9 分 15 秒 | 11 分 20 秒 | 9 分 17 秒    | 8 分 51 秒 |
| 平均暂停 /ms | 51.3       | 49.68      | 62          | 55.38         | \-         |
| 平均 GC 间隔 | 8          | 8          | 3.55        | 7             | \-         |

对于使用G1的三种JVM，我们更关注 Young GC（Normal）和 Mixed GC 的占比，一般来说大部分 GC 应当发生在新生代，即 Young GC，有时候也叫 Normal GC。当新生代也不够用了，传统的垃圾收集器开始进行 Full GC 以回收老年代，而 G1 则对老年代进行部分回收，直到有足够用的空域内存。因此使用 G1 收集器同样也要注意是否有太多的新生代对象漏到老年代，从而因此过多的 Mixed GC 拖慢速度。**频繁的 Mixed GC 带来的就是 MC 卡顿。**

- OpenJDK：114 次 GC 暂停中有 8 次是因为 Mixed GC
- Temurin：115 次 GC 暂停中有 8 次是因为 Mixed GC
- Zulu JDK：120 次 GC 暂停中有 2 次是因为 Mixed GC

单纯从Mixed GC来看，我们应当选择Zulu JDK，他产生Mixed GC的次数更少，但是从生成区块的速率上来看，Zulu JDK的速率是最慢的，猜测其采用的策略为性能换取稳定度。

而OpenJ9这一虚拟机在测试表现中尽管性能表现不佳，但是其内存占用却是最少的，在这一基础上，如果我们需要优化内存，使用的应当是OpenJ9，事实上，Minecraft社区内有大量使用OpenJDK得到更佳的服务器内存使用性能的例子，因此我们也推荐您更换OpenJ9作为JVM。

![](/技术/advance.1.1.1.png)

区块生成速率图

在确认了JVM性能的基础上，我们来选择究竟使用哪一家的JDK，Azul Zing是最佳的选择，如果内存较小，可以考虑 IBM Semeru，如果受商业限制，则可以考虑 Azul Zulu JDK，他们的 Mixed GC 更少，当然，Linux 发行版本自带的 OpenJDK也是可以考虑的选择，在性能测试中可以看出随着各种优化机制的接入，性能第二的就是 OpenJDK。

下一步我们来讨论调优的策略，不同的JVM参数实际上会影响到多方面的使用。**越多的启动参数反而往往导致越多的性能损耗**。在不了解JVM工作原理的情况下，不要随随便便增加一大堆无用的启动参数。（例如国外论坛流传的使用G1GC可以优化MC性能，尽管G1GC减少了Full GC的时间，但是会额外增加10%~30%的CPU时间占用，完全得不偿失。）

#### 调优GC的基本步骤

在游戏中，我们也可以通过相关程序或插件分析GC的性能。

**1.监控GC的状态**

使用各种JVM工具，查看当前日志，分析当前JVM参数设置，并且分析当前堆内存快照和gc日志，根据实际的各区域内存划分和GC执行时间，觉得是否进行优化。

**举一个例子： 系统崩溃前的一些现象：**

- 每次垃圾回收的时间越来越长，由之前的10ms延长到50ms左右，FullGC的时间也有之前的0.5s延长到4、5s
- FullGC的次数越来越多，最频繁时隔不到1分钟就进行一次FullGC
- 年老代的内存越来越大并且每次FullGC后年老代没有内存被释放

之后系统会无法响应新的请求，逐渐到达OutOfMemoryError的临界值，这个时候就需要分析JVM内存快照dump。如果放任不管，服务端就会崩溃。

**2.生成堆的dump文件**

通过JMX的MBean生成当前的Heap信息，大小为一个3G（整个堆的大小）的hprof文件，如果没有启动JMX可以通过Java的jmap命令来生成该文件。

**3.分析dump文件**

打开这个3G的堆信息文件，显然一般的Window系统没有这么大的内存，必须借助高配置的Linux，几种工具打开该文件：

- Visual VM
- IBM HeapAnalyzer
- JDK 自带的Hprof工具
- **Mat(Eclipse专门的静态内存分析工具)推荐使用**

备注：文件太大，建议使用Eclipse专门的静态内存分析工具Mat打开分析。

**4.分析结果，判断是否需要优化**

如果各项参数设置合理，系统没有超时日志出现，GC频率不高，GC耗时不高，那么没有必要进行GC优化，如果GC时间超过1-3秒，或者频繁GC，则必须优化。

**注：如果满足下面的指标，则一般不需要进行GC：**

- Minor GC执行时间不到50ms；
- Minor GC执行不频繁，约10秒一次；
- Full GC执行时间不到1s；
- Full GC执行频率不算频繁，不低于10分钟1次；

**5.调整GC类型和内存分配**

如果内存分配过大或过小，或者采用的GC收集器比较慢，则应该优先调整这些参数，并且先找1台或几台机器进行beta，然后比较优化过的机器和没有优化的机器的性能对比，并有针对性的做出最后选择。

#### 调优JVM参数的原则

1.针对JVM堆的设置，一般可以通过-Xms -Xmx限定其最小、最大值，**为了防止垃圾收集器在最小、最大之间收缩堆而产生额外的时间，通常把最大、最小设置为相同的值;**

**2.年轻代和年老代将根据默认的比例（1：2）分配堆内存**， 可以通过调整二者之间的比率NewRadio来调整二者之间的大小，也可以针对回收代。

比如年轻代，通过 -XX:newSize -XX:MaxNewSize来设置其绝对大小。同样，为了防止年轻代的堆收缩，我们通常会把-XX:newSize -XX:MaxNewSize设置为同样大小。

3.年轻代和年老代设置多大才算合理

**1）更大的年轻代必然导致更小的年老代，大的年轻代会延长普通GC的周期，但会增加每次GC的时间；小的年老代会导致更频繁的Full GC**

**2）更小的年轻代必然导致更大年老代，小的年轻代会导致普通GC很频繁，但每次的GC时间会更短；大的年老代会减少Full GC的频率**

如何选择应该依赖应用程序**对象生命周期的分布情况**： 如果应用存在大量的临时对象，应该选择更大的年轻代；如果存在相对较多的持久对象，年老代应该适当增大。但很多应用都没有这样明显的特性。

**在抉择时应该根据以下两点：**

（1）本着Full GC尽量少的原则，让年老代尽量缓存常用对象，JVM的默认比例1：2也是这个道理 。

（2）通过观察应用一段时间，看其他在峰值时年老代会占多少内存，在不影响Full GC的前提下，根据实际情况加大年轻代，比如可以把比例控制在1：1。但应该给年老代至少预留1/3的增长空间。

**4.在配置较好的机器上（比如多核、大内存），可以为年老代选择并行收集算法.**

**5.线程堆栈的设置**：每个线程默认会开启1M的堆栈，用于存放栈帧、调用参数、局部变量等，对大多数应用而言这个默认值太了，一般256K就足用。

理论上，在内存不变的情况下，减少每个线程的堆栈，可以产生更多的线程，但这实际上还受限于操作系统。

### 实际应用

如果您没有看懂上面的一段也没有关系，但是如果您有一定的技术基础，这些内容一定可以帮助你找到JVM实际的内存使用情况，并进行针对性的优化。

如果您没有阅读上面的内容，我们也推荐您阅读一下本段。究竟使用哪一家的JDK，Azul Zing是最佳的选择，如果内存较小，可以考虑 IBM Semeru，如果受商业限制，则可以考虑 Azul Zulu JDK，他们的 Mixed GC 更少，当然，Linux 发行版本自带的 OpenJDK也是可以考虑的选择，在性能测试中可以看出随着各种优化机制的接入，性能第二的就是 OpenJDK。您可以先更换合适的JDK，我们再进一步往下讨论。

下面我们将会给出一些实际的参数供您参考。

一段基础的启动命令应当为：

```plaintext
java -jar server.jar
```

在这段命令里`-jar`本质就是Java的一个参数，代表运行的是`jar`文件，也就是说我们下文讨论的所有参数都应当加载`-jar`之前。

#### **首先应当指定的参数（必读）**

\* `-Xms` JVM使用的最小内存

\* `-Xmx` JVM使用的最大内存

注意事项：

- **不要让 Xmx 完全占用你机器的全部内存**，这样会导致其他程序无法运行，系统也会需要一定内存。
- **保证这两个值相同**，如果Xms低于Xmx，那么未使用的内存就被浪费了。而G1的内存越多，运行效果就越好。G1自适应地选择给每个区域多少内存来优化。
- 调优GC行为的基本思想是确保对象尽快清除，G1的内存越多，就能将垃圾尽快清除。

#### 一些通用的应该加入的参数

\* `-XX:+AggressiveOpts` 尽可能的使用更多对性能有帮助的优化功能（仅JAVA8）

\* `-XX:+UseCompressedOops`指针压缩，可以减少一定的内存占用（仅JAVA8，64位才支持）

\* `-XX:+UseG1GC` 使用G1GC，如果分配的内存大于等于4GB，建议使用

#### 其他可选加入的参数

见下表：

|                                |                                                           |
| ------------------------------ | --------------------------------------------------------- |
| 参数及其默认值                 | 描述                                                      |
| \-XX:-DisableExplicitGC        | 禁止调用System.gc()；但jvm的gc仍然有效                    |
| \-XX:+MaxFDLimit               | 最大化文件描述符的数量限制                                |
| \-XX:+ScavengeBeforeFullGC     | 新生代GC优先于Full GC执行                                 |
| \-XX:+UseGCOverheadLimit       | 在抛出OOM之前限制jvm耗费在GC上的时间比例                  |
| **\-XX:-UseConcMarkSweepGC**   | **对老生代采用并发标记交换算法进行GC**                    |
| **\-XX:-UseParallelGC**        | **启用并行GC**                                            |
| \-XX:-UseParallelOldGC         | 对Full GC启用并行，当-XX:-UseParallelGC启用时该项自动启用 |
| **\-XX:-UseSerialGC**          | **启用串行GC**                                            |
| \-XX:+UseThreadPriorities      | 启用本地线程优先级                                        |
| \-XX:LargePageSizeInBytes=4m   | 设置用于Java堆的大页面尺寸                                |
| \-XX:MaxHeapFreeRatio=70       | GC后java堆中空闲量占的最大比例                            |
| **\-XX:MaxNewSize=size**       | **新生成对象能占用内存的最大值**                          |
| **\-XX:MaxPermSize=64m**       | **老生代对象能占用内存的最大值**                          |
| \-XX:MinHeapFreeRatio=40       | GC后java堆中空闲量占的最小比例                            |
| \-XX:NewRatio=2                | 新生代内存容量与老生代内存容量的比例                      |
| **\-XX:NewSize=2.125m**        | **新生代对象生成时占用内存的默认值**                      |
| \-XX:ReservedCodeCacheSize=32m | 保留代码占用的内存容量                                    |
| \-XX:ThreadStackSize=512       | 设置线程栈大小，若为0则使用系统默认值                     |
| \-XX:+UseLargePages            | 使用大页面内存                                            |

### 直接可以使用的案例（抄作业）

**下面是可以直接抄的作业**，但如果你真的能看懂原理并自行查找JVM的内存回收存在的问题，您应该可以根据本篇内容自行添加参数。

对于高版本Java可直接应用的参数，如果您的玩家数量很多且使用超过10GB的内存，您可能需要调整以下内容：

- `-XX:G1MaxNewSizePercent=60`
- `-XX:G1NewSizePercent=40`

```plaintext
java -Xms<视情况> -Xmx<视情况> -XX:+UseG1GC -XX:+UnlockExperimentalVMOptions -XX:MaxGCPauseMillis=100 -XX:+DisableExplicitGC -XX:TargetSurvivorRatio=90 -XX:G1NewSizePercent=50 -XX:G1MaxNewSizePercent=80 -XX:G1MixedGCLiveThresholdPercent=35 -XX:+AlwaysPreTouch -XX:+ParallelRefProcEnabled -Dusing.aikars.flags=mcflags.emc.gs -jar <服务端名称>.jar
```

对于Java8可用的参数

```plaintext
java -Xms<视情况> -Xmx<视情况> -server -XX:-UseVMInterruptibleIO -XX:NewRatio=3 -XX:+UseConcMarkSweepGC -XX:+UseParNewGC -XX:+CMSIncrementalPacing -XX:ParallelGCThreads=4 -XX:+AggressiveOpts -XX:+UseFastAccessorMethods -XX:+UseBiasedLocking -XX:+CMSParallelRemarkEnabled -XX:MaxGCPauseMillis=50 -XX:+UseAdaptiveGCBoundary -XX:-UseGCOverheadLimit -XX:SurvivorRatio=8 -XX:TargetSurvivorRatio=90 -XX:MaxTenuringThreshold=15 -XX:+DisableExplicitGC -Xnoclassgc -oss4M -ss4M -XX:CMSInitiatingOccupancyFraction=60 -XX:SoftRefLRUPolicyMSPerMB=2048 -jar <jar文件> nogui
```

参考资料：

1、aikar的JVM调优教程：[https://aikar.co/category/minecraft/](https://aikar.co/category/minecraft/)

2、**针对 Minecraft 的 JVM 调优：**[https://developer.aliyun.com/article/1079907/](https://developer.aliyun.com/article/1079907)

3、Reddit论坛贴：[Java VMS and You:How to reduce your ram and cpu](https://www.reddit.com/r/feedthebeast/comments/as6p87/java_vms_and_you_how_to_reduce_your_ram_and_cpu/)

4、Minecraft中文wiki：[架设服务器](https://minecraft.fandom.com/zh/wiki/%E6%95%99%E7%A8%8B/%E6%9E%B6%E8%AE%BE%E6%9C%8D%E5%8A%A1%E5%99%A8#%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96Java%E5%8F%82%E6%95%B0)

编者：JianMoOvO

## 使用Geyser实现基岩互通并接入外置登陆

Geyser（间歇泉）是一项能够允许基岩版玩家加入Java版Minecraft服务器的技术，他能够将Java服务器的内容对应翻译为基岩版服务器的内容，通过这项技术我们能够允许基岩版玩家加入高校服务器及联合大厅。

本篇内容将会呈现完整的间歇泉搭建教程并接入外置登陆。

### 搭建间歇泉

首先，我们需要下载间歇泉，下载地址在[此处](https://geysermc.org/download)

间歇泉官方提供了多种服务端的支持，您只需要选择对应的插件版本下载即可，另外，群组服仅需要在Velocity/BungeeCord/Waterfall上安装即可，不需要在下游服务端进行安装。当然，如果出现了兼容性问题，又或者你需要加入的服务器并不属于你，你可以选择Standalone版本，这是一个独立的服务端，他可以允许你自行指向其他的Java服务器，**如果条件允许，我们也非常推荐您使用此版本，便于维护。**

![](/技术/advance2.3.1.png)

**Standalone版本更适合外置登陆，同时它也允许端口穿透等功能，本篇教程将会以此版本为教学。插件版的配置方法与此版本完全相同，您可以参照本篇进行搭建。**

首先，下载最新的Standalone版本，按照正常的服务端启动方式对他进行启动。间歇泉需要的内存非常非常少，512M即可，除非你开设的是一个超大型服务器，不然无需担忧内存使用。

初次启动后关闭，我们会得到这些文件。

![](/技术/advance.3.2.png)

**我们需要关注的就是config.yml，这是间歇泉的配置文件，你需要重点关注**`**bedrock**`**和**`**remote**`**的配置项。**

当然我们在这里也附上所有配置项的中文版本供您参考

```plaintext
# --------------------------------

# 间歇泉配置文件

#

# Minecraft： Bedrock Edition 和 Minecraft： Java Edition 之间的桥梁。

#

# GitHub： https://github.com/GeyserMC/Geyser

# Discord：https://discord.gg/geysermc

# --------------------------------

bedrock:

 # 将侦听连接的 IP 地址。

 # 通常，只有当您想限制哪些 IP 可以连接到您的服务器时，才应该取消注释并更改此设置。

 #address：0.0.0.0

 # 将侦听连接的端口（UDP）

 port: 19132

 # 某些托管服务会在您每次启动服务器时更改您的 Java 端口，并且需要将相同的端口用于基岩。

 # 此选项使基岩端口与每次启动服务器时 Java 端口相同。

 # 此选项仅适用于插件版本。

 clone-remote-port: false

 # 将广播给 Minecraft： Bedrock Edition 客户端的 MOTD。如果“clone-remote-motd”设置为 true，则无关紧要

 # 如果其中任何一个为空，则相应的字符串将默认为“Geyser”

 motd1: "Geyser"

 motd2: "Another Geyser server."

 # 将发送到 Minecraft： Bedrock Edition 客户端的服务器名称。这在暂停菜单和设置菜单中都可见。

 server-name: "Geyser"

 # 将网络流量压缩到基岩客户端的多少。数字越大，使用的 CPU 使用率越高，但是

 # 使用的带宽越小。在低于 -1 或高于 9 时没有任何影响。设置为 -1 表示禁用。

 compression-level: 6

 # 是否为客户端启用 PROXY 协议。除非运行 UDP 反向代理，否则您不需要此功能

 # 在您的间歇泉实例前面。

 enable-proxy-protocol: false

 # 允许的代理协议代代理 IP 地址/子网的列表。仅在启用“启用代理协议”时有效，并且

 # 实际上应该只在您无法使用适当的防火墙时使用（通常与共享托管服务提供商等相同）。

 # 将此列表留空表示没有 IP 地址白名单。

 # 同时支持 IP 地址和子网。

 # proxy协议白名单 IPS： [ “127.0.0.1”， “172.18.0.0/16” ]

remote:

 # 远程（Java 版）服务器的 IP 地址

 # 如果是“auto”，对于独立版本，远程地址将设置为 127.0.0.1，

 # 对于插件版本，建议将其保留为“auto”，以便 Geyser 自动配置地址、端口和身份验证类型。

 # 如果安装了floodgate，则保留为“auto”。

 address: auto

 # 远程（Java 版）服务器的端口

 # 对于插件版本，如果地址已设置为“auto”，则端口也将跟随服务器的侦听端口。

 port: 25565

 # 认证类型。可以是离线、在线或floodgate（见 https://github.com/GeyserMC/Geyser/wiki/Floodgate）。

 # 对于插件版本，建议将“地址”字段保留为“auto”，以便自动配置 Floodgate 支持。

 # 如果安装了 Floodgate 并且 'address： ' 设置为 “auto”，则会自动使用 “auth-type： floodgate”。

 auth-type: online

 # 允许通过间歇泉使用基于密码的身份验证方法。仅在联机模式下有用。

 # 如果这是false，用户必须使用Geyser在其桌面上提供的代码对Microsoft进行身份验证。

 allow-password-authentication: true

 # 连接到服务器时是否启用 PROXY 协议。

 # 这仅在以下情况下有用：

 # 1）您的服务器支持代理协议（可能不支持）

 # 2） 您在代理的主配置中启用选项的情况下运行 Velocity 或 BungeeCord。

 # 如果你不知道这是什么，就不要碰它！

 use-proxy-protocol: false

 # 将基岩客户端用来连接的主机名转发到 Java 服务器

 # 这旨在用于代理上的强制主机

 forward-hostname: false

# Floodgate 使用加密来确保从授权来源使用。

# 这应该指向 Floodgate 生成的公钥（BungeeCord、Spigot 或 Velocity）

# 不使用 Floodgate 时可以忽略这一点。

# 如果您在同一台服务器上使用插件版本的 Floodgate，则会自动从 Floodgate 中获取密钥。

floodgate-key-file: key.pem

# 仅适用于在线模式身份验证类型。

# 存储登录后应保存其 Java 版帐户的基岩玩家列表。

# 这会保存一个令牌，以后可以重复使用该令牌对玩家进行身份验证。这不会保存电子邮件或密码，

# 但是在添加到此列表并允许其他人访问此间歇泉实例的文件时，您仍然应该谨慎。

# 从此列表中删除名称将在下次间歇泉启动时删除其缓存的登录信息。

# 保存令牌的文件与此配置位于同一文件夹中，名为“saved-refresh-tokens.json”。

saved-user-logins:

 - ThisExampleUsernameShouldBeLongEnoughToNeverBeAnXboxUsername

 - ThisOtherExampleUsernameShouldAlsoBeLongEnough

# 指定用户授权间歇泉访问其Microsoft帐户时等待的秒数。

# 在此期间，允许用户断开与服务器的连接。

pending-authentication-timeout: 120

# 如果给出很多命令，基岩客户端在第一次打开命令提示符时可能会冻结。

# 禁用此功能将阻止发送命令建议并解决基岩客户端的冻结问题。

command-suggestions: true

# 以下三个选项启用“ping passthrough” - 从 Java 服务器检索 MOTD、玩家计数和/或协议名称。

# 将 MOTD 从远程服务器中继到基岩玩家。

passthrough-motd: false

# 中继协议名称（例如 BungeeCord [X.X]，Paper 1.X） - 仅在使用自定义协议名称时才真正有用！

# 这也将显示在 MCSrvStatus 等网站上。<mcsrvstat.us>

passthrough-protocol-name: false

# 将玩家数量和最大玩家数从远程服务器中继到基岩玩家。

passthrough-player-counts: false

# 启用传统 ping 直通。除非您的 MOTD 或玩家计数未正确显示，否则无需启用此功能。

# 此选项在独立设备上不执行任何操作。

legacy-ping-passthrough: false

# ping 远程服务器的频率，以秒为单位。仅与独立或旧版 ping 直通相关。

# 如果您遇到连接超时错误，请增加。

ping-passthrough-interval: 3



# 是否将玩家 ping 转发到服务器。虽然启用此功能将使基岩玩家拥有更准确的

#ping，它也可能导致玩家更容易超时。

forward-player-ping: false



# 可以连接的最大玩家数量。目前这只是视觉效果，实际上并不限制玩家数量。

max-players: 100



# 如果调试消息应该通过控制台发送

debug-mode: false



# 允许第三方cape可见。目前允许：

# OptiFine capes、LabyMod capes、5Zig capes 和 MinecraftCapes

allow-third-party-capes: false



# 允许第三方 deadmau5 ears可见。目前允许：

# Minecraft capes

allow-third-party-ears: false



# 允许发送虚假的冷却时间指示器。否则基岩玩家不会看到冷却时间，因为他们仍然使用1.8战斗。

# 请注意：如果开启了冷却时间，部分用户在冷却序列中可能会看到一个黑框，如下所示：

# https://cdn.discordapp.com/attachments/613170125696270357/957075682230419466/Screenshot_from_2022-03-25_20-35-08.png

# 可以通过进入辅助功能选项卡下的基岩设置并将“文本背景不透明度”设置为 0 来禁用此功能

# 此设置可以设置为“title”、“actionbar”或“false”

show-cooldown: title



# 控制是否向玩家显示坐标。

show-coordinates: true



# 基岩玩家是否被阻止执行脚手架式桥接。

disable-bedrock-scaffolding: false



# 如果设置，当基岩玩家执行任何表情时，它将交换副手和主手物品，就像 Java 版键绑定一样

# 有三个选项可以设置为：

# 禁用 - 默认/回退，不应用此解决方法

# 无表情 - 表情不会发送给其他基岩客户端，并且会随手交换。这有效地禁用了所有表情的可见。

# 表情符号和副手 - 表情符号将被发送给基岩客户，副手将被交换

emote-offhand-workaround: "disabled"



# 默认语言环境，如果我们没有客户端请求的语言环境。取消注释以不使用默认系统语言。

# 默认语言环境：en_us



# 指定图像将缓存到磁盘的天数，以保存从互联网下载图像的时间。

# 禁用值 0。（默认值：0）

cache-images: 0



# 允许显示自定义头骨。保持启用状态可能会导致较旧/较弱的设备的性能下降。

allow-custom-skulls: true



# 每个玩家要显示的最大自定义头骨数量。增加此值可能会降低较弱设备上的性能。

# 将其设置为 -1 将导致显示所有自定义头骨，无论距离或数量如何。

max-visible-custom-skulls: 128



# 显示自定义头骨的玩家周围方块半径。

custom-skull-render-distance: 32



# 是否在游戏中添加（目前仅）熔炉矿车作为单独的物品，这在基岩版中通常不存在。

# 仅当使用不使用服务器交换的“传输数据包”样式的代理时，才需要禁用此功能。

# 如果禁用此选项，熔炉矿车物品将映射到料斗矿车物品。

# 此选项需要重新启动间歇泉才能更改其设置。

add-non-bedrock-items: true



# 基岩阻止在下界建造和显示 Y127 以上的方块。

# 此配置选项通过将下界维度 ID 更改为结束 ID 来解决此问题。

# 这样做的主要缺点是整个下界将具有相同的红色雾，而不是每个生物群系都有不同的雾。

above-bedrock-nether-building: false



# 强制客户端加载所有资源包（如果有）。

# 如果设置为 false，则允许用户连接到服务器，即使他们没有

# 想要下载资源包。

force-resource-packs: true



# 允许解锁 Xbox 成就。

# 这将禁止所有命令在游戏中成功运行基岩，否则基岩认为你在作弊。

xbox-achievements-enabled: false



# 服务器是否记录玩家 IP 地址。

log-player-ip-addresses: true



# 是否提醒控制台和操作员有支持基岩版本的新间歇泉版本

# 此间歇泉版本不支持。建议保持启用此选项，因为许多基岩平台

# 自动更新。

notify-on-new-bedrock-update: true



# 使用哪个物品来标记基岩玩家物品栏中不可用的插槽。这方面的例子是在创意中的 2x2 制作网格，

# 或自定义库存菜单，其大小与通常的 3x9 不同。屏障块是默认项。

unusable-space-block: minecraft:barrier



# bStats 是一个完全匿名的统计跟踪器，只跟踪基本信息

# 关于间歇泉，例如有多少人在线，有多少服务器在使用间歇泉，

# 正在使用什么操作系统等。您可以在此处了解有关bStats的更多信息：https://bstats.org/。

# https://bstats.org/plugin/server-implementation/GeyserMC

metrics:

 # 是否应启用指标

 enabled: true

 # 服务器的 UUID，不要更改！

 uuid: 88d62c14-cab2-4ea3-a1df-1832c146434e



#高级选项 - 除非您知道自己在做什么，否则不要触摸！



# 间歇泉在每个记分牌数据包后更新记分牌，但当间歇泉尝试处理

# 每秒大量记分牌数据包可能会导致严重的延迟。

# 此选项允许您指定每秒多少记分牌数据包

# 记分牌更新将限制为每秒四次更新。

scoreboard-packet-threshold: 20



# 允许来自 ProxyPass 和 Waterdog 的连接。

# 请参阅 https://www.spigotmc.org/wiki/firewall-guide/ 以获取帮助 - 使用 UDP 而不是 TCP。

enable-proxy-connections: false



# 互联网支持的最大 MTU 为 1492，但可能会导致数据包分段问题。

# 1400 是默认值。

mtu: 1400

# 是否直接连接到 Java 服务器而不创建 TCP 连接。

# 仅当与数据包或网络接口的插件无法与间歇泉正常工作时，才应禁用此功能。

# 如果在插件版本上启用，则忽略远程地址和端口部分

# 如果在插件版本上禁用，预计性能会降低和延迟会增加

use-direct-connection: true

# 间歇泉是否应该尝试禁用基岩播放器的压缩。这应该是一个好处，因为不需要压缩数据

# 当 Java 数据包未通过网络处理时。

# 这要求使用直接连接为真。

disable-compression: true

config-version: 4
```

在`bedrock`项下，我们需要配置`port`，这是基岩版访问的端口，注意，**此端口需要以UDP协议开放**，当然你可以将`clone-remote-port`设置为`true`，这样使用的端口就会与Java一致，但此端口需要同时放行TCP/UDP协议。同时你也可以配置Motd和Servername，他们都会显示在基岩版的界面中，当然也可以将`passthrough-motd`设置为`true`以直接使用Java版服务器的Motd。

而remote项则决定了连接的Java服务器，`address`项可以是域名或者ip，port则是服务器使用的端口，`auth-type`则需要与Java服务器同步，如果Java服务器开启了`online-mode`，那么此项就需要设置为`online`。

当你配置完此部分后，此时已经可以访问Java版服务器了，此时使用微软账号或Mojang账号就可以进入Java版服务器了，其他配置项也可以按需要更改。

![](/技术/advance.3.3.png)

SITMC和YSUMC的间歇泉入口

![](/技术/advance3.4.png)

通过SITMC的基岩版联合大厅入口访问联合大厅主大厅

如果您使用了外置登陆或者Floodgate，请继续往下阅读。

### 使用外置登陆并接入联合大厅

对MUA的各高校来说，有很大一部分都是用了外置登陆，因此，允许外置登陆加入服务器成为了一个迫切的需求，间歇泉配置外置登陆的步骤与其他服务器并无不同，如果是插件版本，你只需要为安装了间歇泉的服务端安装[authlib-injector](https://github.com/yushijinhun/authlib-injector)，或者为间歇泉的Standalone版本安装[authlib-injector](https://github.com/yushijinhun/authlib-injector)，关于authlib-injector的配置方法，你可以查看这里。

随后，启动游戏并连入间歇泉，此时外置登陆就可以直接使用了，选择`使用mojang账号登录`并输入账号密码即可。

但这里有一些注意事项：

- `auth-type`应设置为`online`
- 不应当添加任何的`saved-user-logins`
- `allow-password-authentication`应设置为`true`

#### 接入联合大厅

对于接入了联合大厅的学校，你可以参照以下内容允许间歇泉同时加入联合大厅

1、首先，配置一个二级域名使用A解析指向你的游戏服务器IP地址，如`be.test.com`，这个二级域名**不应当**与你的Java版二级域名相同。此外，如果您使用代理端，应当有一个二级域名直接连接至联合大厅，如果并没有可以选择使用MUA的联合大厅官方地址。

2、随后，在frp配置文件中修改`domain`的相关部分，如下所示

```plaintext
meta_domain = <JAVA版联合大厅二级域名>
meta_domain_alias = ["<基岩版联合大厅二级域名>"]
meta_forced_hosts = ["<显示在联合大厅的标签名>"]
```

3、将`remote.address`设置为您的`meta_domain`（确保可以连入联合大厅），`remote.port`设置为对应端口，考虑到各学校均采用cname或srv解析指向联合大厅，端口应使用25565，`remote.forward-hostname`应设置为true

4、最后开启间歇泉即可，此时服务器应当已经接入联合大厅，并可以同步联合大厅force host
