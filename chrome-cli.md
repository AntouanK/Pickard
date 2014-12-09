
[Condition	Explanation](http://peter.sh/experiments/chromium-command-line-switches/)

| flag | explanation |
| ------------- |:------------- |
| --0  | 	Value of the --profiler-timing flag that will disable timing information for chrome://profiler. |
| --activate-existing-profile-browser  | 	If set, Chrome will activate any existing browsers for a specific profile. Used for example by the fast-user switcher in the Windows JumpList. |
| --allow-autofill-sync-credential  | 	Force the password manager to allow sync credentials to be autofilled. |
| --allow-cross-origin-auth-prompt  | 	Allows third-party content included on a page to prompt for a HTTP basic auth username/password pair. |
| --allow-external-pages  | 	Allow access to external pages during layout tests. |
| --allow-file-access  | 	On ChromeOS, file:// access is disabled except for certain whitelisted directories. This switch re-enables file:// for testing. |
| --allow-file-access-from-files  | 	By default, file:// URIs cannot read other file:// URIs. This is an override for developers who need the old behavior for testing. |
| --allow-http-background-page  | 	Allows non-https URL for background_page for hosted apps. |
| --allow-http-screen-capture  | 	Allow non-secure origins to use the screen capture API and the desktopCapture extension API. |
| --allow-insecure-websocket-from-https-origin  | 	Allows frames with an https origin to use WebSockets with an insecure URL (ws://). |
| --allow-legacy-extension-manifests  | 	Allows the browser to load extensions that lack a modern manifest when that would otherwise be forbidden. |
| --allow-loopback-in-peer-connection  | 	Allows loopback interface to be added in network list for peer connection. |
| --allow-nacl-crxfs-api[1]  | 	Specifies comma-separated list of extension ids or hosts to grant access to CRX file system APIs. |
| --allow-nacl-file-handle-api[1]  | 	Specifies comma-separated list of extension ids or hosts to grant access to file handle APIs. |
| --allow-nacl-socket-api[1]  | 	Specifies comma-separated list of extension ids or hosts to grant access to TCP/UDP socket APIs. |
| --allow-no-sandbox-job  | 	Enables the sandboxed processes to run without a job object assigned to them. This flag is required to allow Chrome to run in RemoteApps or Citrix. This flag can reduce the security of the sandboxed processes and allow them to do certain API calls like shut down Windows or access the clipboard. Also we lose the chance to kill some processes until the outer job that owns them finishes. |
| --allow-outdated-plugins  | 	Don't block outdated plugins. |
| --allow-running-insecure-content  | 	By default, an https page cannot run JavaScript, CSS or plug-ins from http URLs. This provides an override to get the old insecure behavior. |
| --allow-sandbox-debugging  | 	Allows debugging of sandboxed processes (see zygote_main_linux.cc). |
| --alsa-input-device[2]  | 	The Alsa device to use when opening an audio input stream. |
| --alsa-output-device[2]  | 	The Alsa device to use when opening an audio stream. |
| --also-emit-success-logs  | 	Also emit full event trace logs for successful tests. |
| --alternate-protocol-probability-threshold  | 	Specifies the threshold to be used when determining of an Alternate-Protocol advertisement will be honored. If the advertised probability is larger than the threshold, then it will be honored. |
| --always-authorize-plugins  | 	Prevents Chrome from requiring authorization to run certain widely installed but less commonly used plug-ins. |
| --app  | 	Specifies that the associated value should be launched in "application" mode. |
| --app-id  | 	Specifies that the extension-app with the specified id should be launched according to its configuration. |
| --app-mode-auth-code  | 	Value of GAIA auth code for --force-app-mode. |
| --app-mode-oauth-token  | 	Value of OAuth2 refresh token for --force-app-mode. |
| --app-mode-oem-manifest  | 	Path for app's OEM manifest file. |
| --app-shell-host-window-bounds  | 	Bounds for the host window to create (i.e. "800x600"). |
| --app-shell-install-crx  | 	ID of an extension CRX to be downloaded from the web store. |
| --app-shell-preferred-network  | 	SSID of the preferred WiFi network. |
| --app-shell-refresh-token  | 	Refresh token for identity API calls for the current user. Used for testing. |
| --app-shell-user  | 	User email address of the current user. |
| --apple  | 	No description |
| --apps-checkout-url  | 	Overrides the apps checkout URL, which is used to determine when to expose some private APIs. |
| --apps-gallery-download-url  | 	The URL that the webstore APIs download extensions from. Note: the URL must contain one '%s' for the extension ID. |
| --apps-gallery-update-url  | 	The update url used by gallery/webstore extensions. |
| --apps-gallery-url  | 	The URL to use for the gallery link in the app launcher. |
| --apps-keep-chrome-alive-in-tests[3]  | 	Prevents Chrome from quitting when Chrome Apps are open. |
| --artifacts-dir  | 	Screenshot testing: specifies the directoru where artifacts will be stored. |
| --ash-animate-from-boot-splash-screen  | 	Enables an animated transition from the boot splash screen (Chrome logo on a white background) to the login screen. Implies kAshCopyHostBackgroundAtBoot and doesn't make much sense if used in conjunction with kDisableBootAnimation (since the transition begins at the same time as the white/grayscale login screen animation). |
| --ash-browsertests[4]  | 	Force browser tests to run in Ash/Metro on Windows 8. |
| --ash-constrain-pointer-to-root  | 	Constrains the pointer movement within a root window on desktop. |
| --ash-copy-host-background-at-boot  | 	Copies the host window's content to the system background layer at startup. Can make boot slightly slower, but also hides an even-longer awkward period where we display a white background if the login wallpaper takes a long time to load. |
| --ash-debug-shortcuts  | 	Enable keyboard shortcuts useful for debugging. |
| --ash-default-wallpaper-is-oem  | 	Indicates that the wallpaper images specified by kAshDefaultWallpaper{Large,Small} are OEM-specific (i.e. they are not downloadable from Google). |
| --ash-default-wallpaper-large  | 	Default wallpaper to use (as paths to trusted, non-user-writable JPEG files). |
| --ash-default-wallpaper-small  | 	No description |
| --ash-disable-lock-layout-manager  | 	Disables LockLayoutManager used for LockScreenContainer, return back to WorkspaceLayoutManager. |
| --ash-disable-text-filtering-in-overview-mode  | 	Enables text filtering with the keyboard in Overview Mode. |
| --ash-disable-touch-exploration-mode  | 	Disable the Touch Exploration Mode. Touch Exploration Mode will no longer be turned on automatically when spoken feedback is enabled when this flag is set. |
| --ash-enable-fullscreen-app-list[5]  | 	Enables fullscreen app list if Ash is in maximize mode. |
| --ash-enable-magnifier-key-scroller[5]  | 	Enables key bindings to scroll magnified screen. |
| --ash-enable-mirrored-screen  | 	Enables mirrored screen. |
| --ash-enable-power-button-quick-lock  | 	Enables quick, non-cancellable locking of the screen when in maximize mode. |
| --ash-enable-software-mirroring  | 	Enables software based mirroring. |
| --ash-enable-system-sounds  | 	When this flag is set, system sounds will be played whether the ChromeVox is enabled or not. |
| --ash-enable-touch-view-testing  | 	Enables touch view testing. TODO(skuhne): Remove TOGGLE_TOUCH_VIEW_TESTING accelerator once this flag is removed. |
| --ash-enable-tray-dragging  | 	Enables showing the tray bubble by dragging on the shelf. |
| --ash-force-desktop[4]  | 	Force Ash to open its root window on the desktop, even on Windows 8 where it would normally end up in metro. |
| --ash-guest-wallpaper-large  | 	Wallpaper to use in guest mode (as paths to trusted, non-user-writable JPEG files). |
| --ash-guest-wallpaper-small  | 	No description |
| --ash-hide-notifications-for-factory  | 	Hides notifications that are irrelevant to Chrome OS device factory testing, such as battery level updates. |
| --ash-host-window-bounds  | 	Sets a window size, optional position, and optional scale factor. "1024x768" creates a window of size 1024x768. "100+200-1024x768" positions the window at 100,200. "1024x768*2" sets the scale factor to 2 for a high DPI display. |
| --ash-secondary-display-layout  | 	Specifies the layout mode and offsets for the secondary display for testing. The format is "<trbl>,<offset>" where t=TOP, r=RIGHT, b=BOTTOM and L=LEFT. For example, 'r,-100' means the secondary display is positioned on the right with -100 offset. (above than primary) |
| --ash-touch-hud  | 	Enables the heads-up display for tracking touch points. |
| --ash-use-first-display-as-internal  | 	Uses the 1st display in --ash-host-window-bounds as internal display. This is for debugging on linux desktop. |
| --ash-webui-init  | 	When wallpaper boot animation is not disabled this switch is used to override OOBE/sign in WebUI init type. Possible values: parallel/postpone. Default: parallel. |
| --assert-test  | 	Causes the browser process to throw an assertion on startup. |
| --async-touchmove  | 	No description |
| --audio-buffer-size  | 	Allow users to specify a custom buffer size for debugging purpose. |
| --aura-legacy-power-button  | 	(Most) Chrome OS hardware reports ACPI power button releases correctly. Standard hardware reports releases immediately after presses. If set, we lock the screen or shutdown the system immediately in response to a press instead of displaying an interactive animation. |
| --auth-ext-path  | 	Enables overriding the path for the default authentication extension. |
| --auth-negotiate-delegate-whitelist  | 	Whitelist of servers that Negotiate will generate delegated Kerberos tickets for. |
| --auth-schemes  | 	HTTP authentication schemes to enable. This is a comma-separated list of authentication schemes (basic, digest, ntlm, and negotiate). By default all schemes are enabled. The primary use of this command line flag is to help triage authentication-related issues reported by end-users. |
| --auth-server-whitelist  | 	Whitelist of servers which NTLM and Negotiate can automatically authenticate with using the default credentials of the currently logged in user. |
| --auto  | 	The values the kTouchEvents switch may have, as in --touch-events=disabled. auto: enabled at startup when an attached touchscreen is present. |
| --auto-launch-at-startup  | 	A flag that is used to tell Chrome that it was launched automatically at computer startup and not by some user action. |
| --auto-select-desktop-capture-source  | 	This flag makes Chrome auto-select the provided choice when an extension asks permission to start desktop capture. Should only be used for tests. For instance, --auto-select-desktop-capture-source="Entire screen" will automatically select to share the entire screen in English locales. |
| --auto-virtual-keyboard  | 	No description |
| --blink-platform-log-channels  | 	Choose which logging channels in blink platform to activate. See Logging.cpp in blink's Source/platform for a list of available channels. |
| --block-cross-site-documents  | 	Block cross-site documents (i.e., HTML/XML/JSON) from being loaded in subresources when a document is not supposed to read them. This will later allow us to block them from the entire renderer process when site isolation is enabled. |
| --bootstrap  | 	Values for the kExtensionContentVerification flag. See ContentVerifierDelegate::Mode for more explanation. |
| --browser-subprocess-path  | 	Path to the exe to run for the renderer and plugin subprocesses. |
| --browser-test  | 	Tells Content Shell that it's running as a content_browsertest. |
| --bwsi  | 	Indicates that the browser is in "browse without sign-in" (Guest session) mode. Should completely disable extensions, sync and bookmarks. |
| --canvas-msaa-sample-count  | 	The number of MSAA samples for canvas2D. Requires MSAA support by GPU to have an effect. 0 disables MSAA. |
| --cc-layer-tree-test-no-timeout  | 	Prevents the layer tree unit tests from timing out. |
| --cc-rebaseline-pixeltests  | 	Makes pixel tests write their output instead of read it. |
| --certificate-transparency-log  | 	Certificate Transparency: Uses the provided log(s) for checking Signed Certificate Timestamps provided with certificates. The switch's value is: log_description:log_key,log_description:log_key,... where log_description is a textual description of the log. log_key is a Base64'd DER-encoded SubjectPublicKeyInfo of the log's public key. Multiple logs can be specified by repeating description:key pairs, separated by a comma. |
| --channel  | 	The value of this switch tells the child process which IPC channel the browser expects to use to communicate with it. |
| --check-cloud-print-connector-policy  | 	Checks the cloud print connector policy, informing the service process if the policy is set to disallow the connector, then quits. |
| --check-for-update-interval  | 	How often (in seconds) to check for updates. Should only be used for testing purposes. |
| --check-layout-test-sys-deps  | 	Check whether all system dependencies for running layout tests are met. |
| --cipher-suite-blacklist  | 	Comma-separated list of SSL cipher suites to disable. |
| --clear-token-service  | 	Clears the token service before using it. This allows simulating the expiration of credentials during testing. |
| --cloud-devices-url  | 	The URL of the cloud devices service to use. |
| --cloud-print-file  | 	Tells chrome to display the cloud print dialog and upload the specified file for printing. |
| --cloud-print-file-type  | 	Specifies the mime type to be used when uploading data from the file referenced by cloud-print-file. Defaults to "application/pdf" if unspecified. |
| --cloud-print-job-title  | 	Used with kCloudPrintFile to specify a title for the resulting print job. |
| --cloud-print-print-ticket  | 	Used with kCloudPrintFile to specify a JSON print ticket for the resulting print job. Defaults to null if unspecified. |
| --cloud-print-setup-proxy  | 	Setup cloud print proxy for provided printers. This does not start service or register proxy for autostart. |
| --cloud-print-url  | 	The URL of the cloud print service to use, overrides any value stored in preferences, and the default. Only used if the cloud print service has been enabled. Used for testing. |
| --cloud-print-xmpp-endpoint  | 	The XMPP endpoint the cloud print service will use. Only used if the cloud print service has been enabled. Used for testing. |
| --compensate-for-unstable-pinch-zoom  | 	Enable compensation for unstable pinch zoom. Some touch screens display significant amount of wobble when moving a finger in a straight line. This makes two finger scroll trigger an oscillating pinch zoom. See crbug.com/394380 for details. |
| --compile-shader-always-succeeds  | 	Always return success when compiling a shader. Linking will still fail. |
| --component-updater  | 	Comma-separated options to troubleshoot the component updater. Only valid for the browser process. |
| --composite-to-mailbox  | 	Causes the compositor to render to textures which are then sent to the parent through the texture mailbox mechanism. Requires --enable-compositor-frame-message. |
| --connect-to-metro-viewer  | 	On Windows only: requests that Chrome connect to the running Metro viewer process. |
| --console  | 	No description |
| --consumer-device-management-url  | 	Specifies the URL of the consumer device management backend. |
| --copresence-server  | 	Address for calls to the Copresence server (via Apiary). Defaults to https://www.googleapis.com/copresence/v2/copresence. |
| --copresence-tracing-token  | 	Apiary tracing token for calls to the Copresence server. |
| --crash-dumps-dir  | 	The directory breakpad should store minidumps in. |
| --crash-on-failure  | 	When specified to "enable-leak-detection" command-line option, causes the leak detector to cause immediate crash when found leak. |
| --crash-on-hang-threads  | 	Comma-separated list of BrowserThreads that cause browser process to crash if the given browser thread is not responsive. UI,IO,DB,FILE,CACHE are the list of BrowserThreads that are supported. For example: --crash-on-hang-threads=UI:3:18,IO:3:18 --> Crash the browser if UI or IO is not responsive for 18 seconds and the number of browser threads that are responding is less than or equal to 3. |
| --crash-test  | 	Causes the browser process to crash on startup. |
| --create-browser-on-startup-for-tests  | 	Some platforms like ChromeOS default to empty desktop. Browser tests may need to add this switch so that at least one browser instance is created on startup. TODO(nkostylev): Investigate if this switch could be removed. (http://crbug.com/148675) |
| --cryptauth-http-host  | 	Overrides the default URL for Google APIs (https://www.googleapis.com) used by CryptAuth. |
| --custom-launcher-page  | 	Specifies the chrome-extension:// URL for the contents of an additional page added to the experimental app launcher. |
| --data-path  | 	Makes Content Shell use the given path for its data directory. |
| --data-reduction-proxy-alternative  | 	The origin of an alternative data reduction proxy. |
| --data-reduction-proxy-alternative-fallback  | 	The origin of an alternative data reduction proxy fallback. |
| --data-reduction-proxy-probe-url  | 	Sets a canary URL to test before committing to using the data reduction proxy. Note this canary does not go through the data reduction proxy. |
| --data-reduction-proxy-warmup-url  | 	Sets a URL to fetch to warm up the data reduction proxy on startup and network changes. |
| --data-reduction-ssl-proxy  | 	The origin of the data reduction SSL proxy. |
| --dbus-stub  | 	Forces the stub implementation of dbus clients. |
| --dbus-unstub-clients  | 	Comma-spearated list of dbus clients that should be unstubbed. See chromeos/dbus/dbus_client_bundle.cc for the names of the dbus clients. |
| --debug-accelerators  | 	No description |
| --debug-enable-frame-toggle  | 	Enables a frame context menu item that toggles the frame in and out of glass mode (Windows Vista and up only). |
| --debug-packed-apps  | 	Adds debugging entries such as Inspect Element to context menus of packed apps. |
| --debug-plugin-loading  | 	Dumps extra logging about plugin loading to the log file. |
| --debug-print[6]  | 	Enables support to debug printing subsystem. |
| --default-tile-height  | 	No description |
| --default-tile-width  | 	Sets the tile size used by composited layers. |
| --delete  | 	No description |
| --derelict-detection-timeout  | 	Time before a machine at OOBE is considered derelict. |
| --derelict-idle-timeout  | 	Time before a derelict machines starts demo mode. |
| --desktop  | 	No description |
| --device-management-url  | 	Specifies the URL at which to fetch configuration policy from the device management backend. |
| --device-scale-factor[4]  | 	Device scale factor passed to certain processes like renderers, etc. |
| --diagnostics  | 	Triggers a plethora of diagnostic modes. |
| --diagnostics-format  | 	Sets the output format for diagnostic modes enabled by diagnostics flag. |
| --diagnostics-recovery  | 	Tells the diagnostics mode to do the requested recovery step(s). |
| --disable-3d-apis  | 	Disables client-visible 3D APIs, in particular WebGL and Pepper 3D. This is controlled by policy and is kept separate from the other enable/disable switches to avoid accidentally regressing the policy support for controlling access to these APIs. |
| --disable-about-in-settings  | 	When kEnableSettingsWindow is used, About is shown as an overlay in Settings instead of as a separate page, unless this flag is specified. |
| --disable-accelerated-2d-canvas  | 	Disable gpu-accelerated 2d canvas. |
| --disable-accelerated-video-decode  | 	Disables hardware acceleration of video decode, where available. |
| --disable-account-consistency  | 	Disables consistent identity features. |
| --disable-answers-in-suggest  | 	Disables the experimental Answers in Suggest feature. |
| --disable-app-list-app-info  | 	If set, the app info context menu item is not available in the app list UI. |
| --disable-app-list-dismiss-on-blur  | 	If set, the app list will not be dismissed when it loses focus. This is useful when testing the app list or a custom launcher page. It can still be dismissed via the other methods (like the Esc key). |
| --disable-application-cache  | 	Disable the ApplicationCache. |
| --disable-async-dns  | 	Disables the experimental asynchronous DNS client. |
| --disable-auth-negotiate-cname-lookup  | 	Disables CNAME lookup of the host when generating the Kerberos SPN for a Negotiate challenge. See HttpAuthHandlerNegotiate::CreateSPN for more background. |
| --disable-background-networking  | 	Disable several subsystems which run network requests in the background. This is for use when doing network performance testing to avoid noise in the measurements. |
| --disable-backing-store-limit  | 	Disable limits on the number of backing stores. Can prevent blinking for users with many windows/tabs and lots of memory. |
| --disable-blink-scheduler  | 	Disable the Blink Scheduler. Ensures there's no reordering of blink tasks. This switch is intended only for performance tests. |
| --disable-boot-animation  | 	Disables wallpaper boot animation (except of OOBE case). |
| --disable-breakpad  | 	Disables the crash reporting. |
| --disable-bundled-ppapi-flash  | 	Disables the bundled PPAPI version of Flash. |
| --disable-canvas-aa  | 	Disable antialiasing on 2d canvas. |
| --disable-cast[7]  | 	Disables support for playing videos on Chromecast devices. |
| --disable-cast-streaming-hw-encoding  | 	Disable hardware encoding support for Cast Streaming. |
| --disable-click-delay[7]  | 	Disable the click delay by sending click events during double tap. |
| --disable-client-side-phishing-detection  | 	Disables the client-side phishing detection feature. Note that even if client-side phishing detection is enabled, it will only be active if the user has opted in to UMA stats and SafeBrowsing is enabled in the preferences. |
| --disable-component-cloud-policy  | 	Disables fetching and storing cloud policy for components. |
| --disable-component-extensions-with-background-pages  | 	Disable default component extensions with background pages - useful for performance tests where these pages may interfere with perf results. |
| --disable-component-update  | 	No description |
| --disable-composited-antialiasing  | 	Disables layer-edge anti-aliasing in the compositor. |
| --disable-confirmation  | 	No description |
| --disable-contextual-search[7]  | 	Disables Contextual Search. |
| --disable-core-animation-plugins[8]  | 	Disables support for Core Animation plugins. This is triggered when accelerated compositing is disabled. See http://crbug.com/122430. |
| --disable-d3d11  | 	Disables use of D3D11. |
| --disable-databases  | 	Disables HTML5 DB support. |
| --disable-default-apps  | 	Disables installation of default apps on first run. This is used during automated testing. |
| --disable-delegated-renderer  | 	Disables delegated renderer. |
| --disable-demo-mode  | 	Disables the ChromeOS demo. |
| --disable-device-disabling  | 	If this switch is set, the device cannot be remotely disabled by its owner. |
| --disable-device-discovery-notifications  | 	Disables device discovery notifications. |
| --disable-direct-npapi-requests  | 	Handles URL requests by NPAPI plugins through the renderer. |
| --disable-direct-write[4]  | 	Disables the DirectWrite font rendering system on windows. |
| --disable-directwrite-for-ui[4]  | 	Disables DirectWrite font rendering for general UI elements. |
| --disable-display-color-calibration[5]  | 	No description |
| --disable-display-list-2d-canvas  | 	No description |
| --disable-distance-field-text  | 	Disables distance field text. |
| --disable-domain-reliability  | 	Disables Domain Reliability Monitoring. |
| --disable-drive-apps-in-app-list  | 	If set, Drive apps will not be shown side-by-side with Chrome apps. |
| --disable-drop-sync-credential  | 	Disable dropping the credential used to sync passwords. |
| --disable-dwm-composition  | 	Disables use of DWM composition for top level windows. |
| --disable-easy-signin  | 	Disable Easy sign-in. |
| --disable-easy-unlock  | 	Disable Easy unlock. |
| --disable-experimental-app-list  | 	No description |
| --disable-experimental-hotwording  | 	Disables v2 hotword detection features. These features include using a new component extension for performing hotword detection, new UI flows, and always-on detection. |
| --disable-extension-info-dialog  | 	Disables the App Info dialog from being launched from the chrome://extensions page (reverts to the old-style permissions dialog instead). |
| --disable-extensions  | 	Disable extensions. |
| --disable-extensions-file-access-check  | 	Disable checking for user opt-in for extensions that want to inject script into file URLs (ie, always allow it). This is used during automated testing. |
| --disable-extensions-http-throttling  | 	Disable the net::URLRequestThrottlerManager functionality for requests originating from extensions. |
| --disable-file-system  | 	Disable FileSystem API. |
| --disable-flash-3d  | 	Disable 3D inside of flapper. |
| --disable-flash-stage3d  | 	Disable Stage3D inside of flapper. |
| --disable-gaia-services  | 	Disable GAIA services such as enrollment and OAuth session restore. Used by 'fake' telemetry login. |
| --disable-gesture-requirement-for-media-playback[7]  | 	Disable user gesture requirement for media playback. |
| --disable-gl-drawing-for-tests  | 	Disables GL drawing operations which produce pixel output. With this the GL output will not be correct but tests will run faster. |
| --disable-gl-error-limit  | 	Disable the GL error log limit. |
| --disable-glsl-translator  | 	Disable the GLSL translator. |
| --disable-gpu  | 	Disables GPU hardware acceleration. If software renderer is not in place, then the GPU process won't launch. |
| --disable-gpu-compositing  | 	Prevent the compositor from using its GPU implementation. |
| --disable-gpu-driver-bug-workarounds  | 	Disable workarounds for various GPU driver bugs. |
| --disable-gpu-program-cache  | 	Turn off gpu program caching |
| --disable-gpu-rasterization  | 	Disable GPU rasterization, i.e. rasterize on the CPU only. Overrides the kEnableGpuRasterization and kForceGpuRasterization flags. |
| --disable-gpu-sandbox  | 	Disable the GPU process sandbox. |
| --disable-gpu-shader-disk-cache  | 	Disables the GPU shader on disk cache. |
| --disable-gpu-vsync  | 	Stop the GPU from synchronizing on the vsync before presenting. |
| --disable-gpu-watchdog  | 	Disable the thread that crashes the GPU process if it stops responding to messages. |
| --disable-hang-monitor  | 	Suppresses hang monitor dialogs in renderer processes. This may allow slow unload handlers on a page to prevent the tab from closing, but the Task Manager can be used to terminate the offending process in this case. |
| --disable-harfbuzz-rendertext  | 	Disables the HarfBuzz port of RenderText on all platforms. |
| --disable-hid-detection-on-oobe  | 	Disable HID-detection OOBE screen. |
| --disable-histogram-customizer  | 	Disable the RenderThread's HistogramCustomizer. |
| --disable-impl-side-painting  | 	Paint content on the main thread instead of the compositor thread. Overrides the kEnableImplSidePainting flag. |
| --disable-infobar-for-protected-media-identifier[7]  | 	Disables the infobar popup for accessing protected media identifier. |
| --disable-infobars  | 	Prevent infobars from appearing. |
| --disable-input-view  | 	No description |
| --disable-ipv4  | 	No description |
| --disable-ipv6  | 	No description |
| --disable-java  | 	Prevent Java from running. |
| --disable-javascript  | 	Don't execute JavaScript (browser JS like the new tab page still runs). |
| --disable-javascript-harmony-shipping  | 	Disable latest shipping ECMAScript 6 features. |
| --disable-kill-after-bad-ipc  | 	Don't kill a child process when it sends a bad IPC message. Apart from testing, it is a bad idea from a security perspective to enable this switch. |
| --disable-layer-squashing  | 	Disables layer squashing. |
| --disable-lcd-text  | 	Disables LCD text. |
| --disable-legacy-window[4]  | 	Disable the Legacy Window which corresponds to the size of the WebContents. |
| --disable-local-storage  | 	Disable LocalStorage. |
| --disable-logging  | 	Force logging to be disabled. Logging is enabled by default in debug builds. |
| --disable-login-animations  | 	Avoid doing expensive animations upon login. |
| --disable-login-scroll-into-view  | 	Disable login/lock UI (user pods) scrolling into view on JS side when virtual keyboard is shown. |
| --disable-low-res-tiling  | 	When using CPU rasterizing disable low resolution tiling. This uses less power, particularly during animations, but more white may be seen during fast scrolling especially on slower devices. |
| --disable-main-frame-before-activation  | 	Disables sending the next BeginMainFrame before the previous commit activates. Overrides the kEnableMainFrameBeforeActivation flag. |
| --disable-manager-for-sync-signin  | 	Disable both saving and filling for the sync signin form. |
| --disable-material-design-ntp  | 	Disables the Material Design NTP. |
| --disable-media-source  | 	Disables Media Source API (i.e., the MediaSource object). |
| --disable-method-check  | 	No description |
| --disable-minimize-on-second-launcher-item-click  | 	Disable the behavior that the second click on a launcher item (the click when the item is already active) minimizes the item. |
| --disable-network-portal-notification  | 	Disables notifications about captive portals in session. |
| --disable-new-avatar-menu  | 	Disables the new avatar menu, forcing the top-corner avatar button. |
| --disable-new-channel-switcher-ui  | 	Disable new channel switcher UI. |
| --disable-new-kiosk-ui  | 	Disables new Kiosk UI when kiosk apps are represented as user pods. |
| --disable-new-profile-management  | 	Disables new profile management system, including new profile chooser UI. |
| --disable-new-zip-unpacker  | 	Disables the new File System Provider API based ZIP unpacker. |
| --disable-ntp-other-sessions-menu  | 	Disables the menu on the NTP for accessing sessions from other devices. |
| --disable-office-editing-component-extension  | 	Disable Office Editing for Docs, Sheets & Slides component app so handlers won't be registered, making it possible to install another version for testing. |
| --disable-offline-auto-reload  | 	Disable auto-reload of error pages if offline. |
| --disable-offline-auto-reload-visible-only  | 	Disable only auto-reloading error pages when the tab is visible. |
| --disable-offline-load-stale-cache  | 	No description |
| --disable-one-copy  | 	Disable rasterizer that writes directly to GPU memory. Overrides the kEnableOneCopy flag. |
| --disable-origin-chip  | 	Disable the origin chip. |
| --disable-out-of-process-pdf  | 	Disable the out of process PDF plugin. |
| --disable-overlay-scrollbar  | 	Disables overlay scrollbars on Aura or Linux. Does nothing on Mac. |
| --disable-overscroll-edge-effect[7]  | 	Disable overscroll edge effects like those found in Android views. |
| --disable-panel-fitting[5]  | 	Disables panel fitting (used for mirror mode). |
| --disable-password-generation  | 	Disables password generation when we detect that the user is going through account creation. |
| --disable-password-link  | 	Disable the link in the password manager settings page that points to account central. |
| --disable-password-manager-reauthentication  | 	Disable the setting to prompt the user for their OS account password before revealing plaintext passwords in the password manager. |
| --disable-people-search  | 	Enables searching for people from the apps list search box. |
| --disable-pepper-3d  | 	Disable Pepper3D. |
| --disable-permissions-bubbles  | 	Don't use bubbles for content permissions requests instead of infobars. |
| --disable-pinch  | 	Disables compositor-accelerated touch-screen pinch gestures. |
| --disable-pinch-virtual-viewport  | 	No description |
| --disable-plugins  | 	Prevent plugins from running. |
| --disable-plugins-discovery  | 	Disable discovering third-party plug-ins. Effectively loading only ones shipped with the browser plus third-party ones as specified by --extra-plugin-dir and --load-plugin switches. |
| --disable-pnacl-crash-throttling  | 	Disables crash throttling for Portable Native Client. |
| --disable-policy-key-verification  | 	Disables the verification of policy signing keys. TODO(atwilson): Remove this once all test servers have been updated to produce verification signatures. |
| --disable-popup-blocking  | 	Disable pop-up blocking. |
| --disable-preconnect  | 	Disable speculative TCP/IP preconnection. |
| --disable-prefer-compositing-to-lcd-text  | 	Disable the creation of compositing layers when it would prevent LCD text. |
| --disable-prefixed-encrypted-media  | 	Disables prefixed Encrypted Media API (e.g. webkitGenerateKeyRequest()). |
| --disable-prerender-local-predictor  | 	Disable prerendering based on local browsing history. |
| --disable-print-preview  | 	Disables print preview (For testing, and for users who don't like us. :[ ) |
| --disable-prompt-on-repost  | 	Normally when the user attempts to navigate to a page that was the result of a post we prompt to make sure they want to. This switch may be used to disable that check. This switch is used during automated testing. |
| --disable-pull-to-refresh-effect[7]  | 	Disable the pull-to-refresh effect when vertically overscrolling content. |
| --disable-quic  | 	Disables support for the QUIC protocol. |
| --disable-quic-pacing  | 	Disable use of pacing of QUIC packets. This only has an effect if QUIC protocol is enabled. |
| --disable-quic-port-selection  | 	Disable use of Chromium's port selection for the ephemeral port via bind(). This only has an effect if QUIC protocol is enabled. |
| --disable-remote-core-animation[8]  | 	Enable use of cross-process CALayers to display content directly from the GPU process on Mac. |
| --disable-remote-fonts  | 	Disables remote web font support. SVG font should always work whether this option is specified or not. |
| --disable-renderer-accessibility  | 	Turns off the accessibility in the renderer. |
| --disable-rollback-option  | 	Disables rollback option on reset screen. |
| --disable-save-password-bubble  | 	Prevents the save password bubble from being enabled. |
| --disable-search-button-in-omnibox  | 	Disables the "search button in omnibox" experiment. |
| --disable-seccomp-filter-sandbox  | 	Disable the seccomp filter sandbox (seccomp-bpf) (Linux only). |
| --disable-session-crashed-bubble  | 	Disables using bubbles for session restore request. |
| --disable-session-storage  | 	Disable session storage. |
| --disable-settings-window  | 	No description |
| --disable-setuid-sandbox  | 	Disable the setuid sandbox (Linux only). |
| --disable-shader-name-hashing  | 	Turn off user-defined name hashing in shaders. |
| --disable-shared-workers  | 	Disable shared workers. |
| --disable-signin-scoped-device-id  | 	Disable sending signin scoped device id to LSO with refresh token request. |
| --disable-single-click-autofill  | 	The "disable" flag for kEnableSingleClickAutofill. |
| --disable-single-thread-proxy-scheduler  | 	For tests, disable single thread scheduler and only manually composite. |
| --disable-smooth-scrolling  | 	Disable smooth scrolling for testing. |
| --disable-software-rasterizer  | 	Disables the use of a 3D software rasterizer. |
| --disable-spdy-proxy-dev-auth-origin  | 	Disables the origin of the data reduction proxy dev. |
| --disable-suggestions-service  | 	Disables the suggestions service. |
| --disable-supervised-user-blacklist  | 	Disables the supervised user host blacklist. |
| --disable-supervised-user-safesites  | 	Disables SafeSites filtering for supervised users. |
| --disable-svg1dom  | 	Disables SVG 1.1 DOM. |
| --disable-sync  | 	Disables syncing browser data to a Google Account. |
| --disable-sync-app-list  | 	Disables syncing of the app list independent of extensions. |
| --disable-sync-backup  | 	Disable data backup when user's not signed in. |
| --disable-sync-rollback  | 	Disable sync rollback. |
| --disable-sync-synced-notifications  | 	Disable synced notifications. |
| --disable-sync-types  | 	Disables syncing one or more sync data types that are on by default. See sync/internal_api/public/base/model_type.h for possible types. Types should be comma separated, and follow the naming convention for string representation of model types, e.g.: --disable-synctypes='Typed URLs, Bookmarks, Autofill Profiles' |
| --disable-system-fullscreen-for-testing[3]  | 	Forcibly disables Lion-style on newer OSes, to allow developers to test the older, SnowLeopard-style fullscreen. |
| --disable-text-blobs  | 	Disable text blob rendering. |
| --disable-text-input-focus-manager  | 	Disables an experimental focus manager to track text input clients. |
| --disable-threaded-animation  | 	No description |
| --disable-threaded-compositing  | 	Disable multithreaded GPU compositing of web content. |
| --disable-threaded-scrolling  | 	Disable multithreaded, compositor scrolling of web content. |
| --disable-touch-adjustment  | 	Disables touch adjustment. |
| --disable-touch-drag-drop  | 	Disables touch event based drag and drop. |
| --disable-touch-editing  | 	Disables controls that support touch base text editing. |
| --disable-touch-feedback  | 	Disables additional visual feedback to touch input. |
| --disable-transition-compositing  | 	See comment for kEnableCompositingForTransition. |
| --disable-translate  | 	Allows disabling of translate from the command line to assist with automated browser testing (e.g. Selenium/WebDriver). Normal browser users should disable translate with the preference. |
| --disable-v8-idle-notification-after-commit  | 	Disable V8 idle notification after commit. Overrides kEnableV8IdleNotificationAfterCommit. |
| --disable-vaapi-accelerated-video-encode[5]  | 	Enables VA-API accelerated video encode. |
| --disable-views-rect-based-targeting  | 	Specifies if a heuristic should be used to determine the most probable target of a gesture, where the touch region is represented by a rectangle. |
| --disable-virtual-keyboard-overscroll  | 	No description |
| --disable-volume-adjust-sound  | 	Disables volume adjust sound. |
| --disable-web-resources  | 	Disables the backend service for web resources. |
| --disable-web-security  | 	Don't enforce the same-origin policy. (Used by people testing their sites.) |
| --disable-webaudio  | 	Disable web audio API. |
| --disable-webgl  | 	Disable experimental WebGL support. |
| --disable-webrtc[7]  | 	WebRTC is enabled by default on Android. |
| --disable-webrtc-encryption[9]  | 	Disables encryption of RTP Media for WebRTC. When Chrome embeds Content, it ignores this switch on its stable and beta channels. |
| --disable-webrtc-hw-decoding[9]  | 	Disables HW decode acceleration for WebRTC. |
| --disable-webrtc-hw-encoding[9]  | 	Disables HW encode acceleration for WebRTC. |
| --disable-x-token  | 	No description |
| --disable-xslt  | 	Disables support for XSLT. |
| --disable-xss-auditor  | 	Disables Blink's XSSAuditor. The XSSAuditor mitigates reflective XSS. |
| --disable-zero-browsers-open-for-tests  | 	Some tests seem to require the application to close when the last browser window is closed. Thus, we need a switch to force this behavior for ChromeOS Aura, disable "zero window mode". TODO(pkotwicz): Investigate if this bug can be removed. (http://crbug.com/119175) |
| --disable-zero-suggest[7]  | 	Disables zero suggest experiment on Dev channel. |
| --disabled  | 	disabled: touch events are disabled. |
| --disallow-autofill-sync-credential  | 	Disallow autofilling of the sync credential. |
| --disallow-autofill-sync-credential-for-reauth  | 	Disallow autofilling of the sync credential only for transactional reauth pages. |
| --disambiguate-autofill-server-name-types  | 	Local heuristics override server predictions for name types. |
| --disk-cache-dir  | 	Use a specific disk cache location, rather than one derived from the UserDatadir. |
| --disk-cache-size  | 	Forces the maximum disk space to be used by the disk cache, in bytes. |
| --display[10]  | 	Which X11 display to connect to. Emulates the GTK+ "--display=" command line argument. |
| --dns-log-details  | 	No description |
| --dns-prefetch-disable  | 	Disables prefetching of DNS information. |
| --dom-automation  | 	Specifies if the `DOMAutomationController` needs to be bound in the renderer. This binding happens on per-frame basis and hence can potentially be a performance bottleneck. One should only enable it when automating dom based tests. |
| --domain-name  | 	No description |
| --dump-browser-histograms  | 	Requests that a running browser process dump its collected histograms to a given file. The file is overwritten if it exists. |
| --dump-render-tree  | 	Request pages to be dumped as text once they finished loading. |
| --egl  | 	No description |
| --embedded-extension-options  | 	Enables extension options to be embedded in chrome://extensions rather than a new tab. |
| --enable-2d-canvas-clip-aa  | 	Enable antialiasing on 2d canvas clips (as opposed to draw operations) |
| --enable-accelerated-2d-canvas  | 	Enable accelerated 2D canvas. |
| --enable-accelerated-jpeg-decoding  | 	Enable partially decoding jpeg images using the GPU. At least YUV decoding will be accelerated when using this flag. Has no effect unless GPU rasterization is enabled. |
| --enable-accessibility-tab-switcher[7]  | 	Enable the accessibility tab switcher. |
| --enable-account-consistency  | 	Enables consistent identity features. |
| --enable-answers-in-suggest  | 	Enables the experimental Answers in Suggest feature. |
| --enable-app-install-alerts[7]  | 	Enables app install alerts. |
| --enable-app-list  | 	If set, the app list will be enabled as if enabled from CWS. |
| --enable-app-window-controls  | 	Enables the <window-controls> tag in platform apps. |
| --enable-apps-file-associations  | 	Enable OS integration for Chrome app file associations. |
| --enable-apps-show-on-first-paint  | 	Show apps windows after the first paint. Windows will be shown significantly later for heavy apps loading resources synchronously but it will be insignificant for apps that load most of their resources asynchronously. |
| --enable-async-dns  | 	Enables the experimental asynchronous DNS client. |
| --enable-auth-negotiate-port  | 	Enables the inclusion of non-standard ports when generating the Kerberos SPN in response to a Negotiate challenge. See HttpAuthHandlerNegotiate::CreateSPN for more background. |
| --enable-automatic-password-saving  | 	Disables the save-password prompt. Passwords are then saved automatically, without asking the user. |
| --enable-avfoundation[3]  | 	AVFoundation is available in versions 10.7 and onwards, and is to be used http://crbug.com/288562 for both audio and video device monitoring and for video capture. Being a dynamically loaded NSBundle and library, it hits the Chrome startup time (http://crbug.com/311325 and http://crbug.com/311437); for experimentation purposes, in particular library load time issue, the usage of this library can be enabled by using this flag. |
| --enable-begin-frame-scheduling  | 	Use a BeginFrame signal from browser to renderer to schedule rendering. |
| --enable-benchmarking  | 	Enables the benchmarking extensions. |
| --enable-bleeding-edge-rendering-fast-paths  | 	Enable bleeding-edge code to make Chrome draw content faster. The changes behind this path are very likely to break lots of content. ** DO NOT use this flag unless you know what you are doing. ** |
| --enable-bookmark-undo  | 	Enables the multi-level undo system for bookmarks. |
| --enable-browser-side-navigation  | 	PlzNavigate: Use the experimental browser-side navigation path. |
| --enable-captive-portal-bypass-proxy  | 	Bypass proxy for captive portal authorization. |
| --enable-carrier-switching  | 	Enables switching between different cellular carriers from the UI. |
| --enable-centered-app-list  | 	If set, the app list will be centered and wide instead of tall. |
| --enable-client-hints  | 	Enables client hints, which adds hints about browser state to HTTP requests. |
| --enable-cloud-backup  | 	Enables cloud backup feature. |
| --enable-cloud-devices  | 	Enable Google Cloud Devices code. |
| --enable-cloud-print-proxy  | 	This applies only when the process type is "service". Enables the Cloud Print Proxy component within the service process. |
| --enable-cloud-print-xps[4]  | 	Fallback to XPS. By default connector uses CDD. |
| --enable-consumer-management  | 	Enables consumer management, which allows user to enroll, remotely lock and locate the device. |
| --enable-contextual-search[7]  | 	Enables Contextual Search. |
| --enable-crash-reporter  | 	Indicates that crash reporting should be enabled. On platforms where helper processes cannot access to files needed to make this decision, this flag is generated internally. |
| --enable-crash-reporter-for-testing[11]  | 	Used for turning on Breakpad crash reporting in a debug environment where crash reporting is typically compiled but disabled. |
| --enable-credential-manager-api  | 	Enable the experimental Credential Manager JavaScript API. |
| --enable-credit-card-scan  | 	Enables using device's camera to scan a new credit card when filling out a credit card form. |
| --enable-data-reduction-proxy-alt  | 	Enable the alternative data reduction proxy. |
| --enable-deferred-image-decoding  | 	Defer image decoding in WebKit until painting. |
| --enable-delegated-renderer  | 	Enables delegated renderer. |
| --enable-device-discovery-notifications  | 	Enable device discovery notifications. |
| --enable-devtools-experiments  | 	If true devtools experimental settings are enabled. |
| --enable-display-list-2d-canvas  | 	Enables display list based 2d canvas implementation. Options: 1. Enable: allow browser to use display list for 2d canvas (browser makes decision). 2. Force: browser always uses display list for 2d canvas. |
| --enable-distance-field-text  | 	Enables using signed distance fields when rendering text. Only valid if GPU rasterization is enabled as well. |
| --enable-dom-distiller  | 	Enables the DOM distiller. |
| --enable-domain-reliability  | 	Enables Domain Reliability Monitoring. |
| --enable-download-resumption  | 	Enables restarting interrupted downloads. |
| --enable-drop-sync-credential  | 	Enable dropping the credential used to sync passwords. |
| --enable-easy-signin  | 	Enable Easy sign-in. |
| --enable-easy-unlock  | 	Enable Easy unlock. |
| --enable-embedded-extension-options  | 	Hack so that feature switch can work with about_flags. See kEnableScriptsRequireAction. |
| --enable-embedded-signin  | 	If this switch is set, Chrome OS login screen uses `EmbeddedSignin` endpoint of GAIA. |
| --enable-embeddedsearch-api[7]  | 	Enables EmbeddedSearch API in the search results page. |
| --enable-encrypted-media  | 	Enables support for Encrypted Media Extensions (e.g. MediaKeys). |
| --enable-ephemeral-apps-in-webstore  | 	Enables experimentation with ephemeral apps to be launched from the webstore. |
| --enable-exclusive-audio[4]  | 	Use exclusive mode audio streaming for Windows Vista and higher. Leads to lower latencies for audio streams which uses the AudioParameters::AUDIO_PCM_LOW_LATENCY audio path. See http://msdn.microsoft.com/en-us/library/windows/desktop/dd370844.aspx for details. |
| --enable-experimental-app-list  | 	Enable/disable the experimental app list. If enabled, implies --enable-centered-app-list. |
| --enable-experimental-canvas-features  | 	Enable experimental canvas features, e.g. canvas 2D context attributes |
| --enable-experimental-extension-apis  | 	Enables extension APIs that are in development. |
| --enable-experimental-input-view-features  | 	No description |
| --enable-experimental-web-platform-features  | 	Enables Web Platform features that are in development. |
| --enable-extension-action-redesign  | 	Hack so that feature switch can work with about_flags. See kEnableScriptsRequireAction. |
| --enable-extension-activity-log-testing  | 	No description |
| --enable-extension-activity-logging  | 	Enables logging for extension activity. |
| --enable-extension-assets-sharing  | 	Enabled sharing assets for installed default apps. |
| --enable-fast-unload  | 	Enable the fast unload controller, which speeds up tab/window close by running a tab's onunload js handler independently of the GUI - crbug.com/142458 . |
| --enable-file-cookies  | 	By default, cookies are not allowed on file://. They are needed for testing, for example page cycler and layout tests. See bug 1157243. |
| --enable-first-run-ui-transitions  | 	Enables animated transitions during first-run tutorial. |
| --enable-font-antialiasing  | 	Enable font antialiasing for pixel tests. |
| --enable-gpu-benchmarking  | 	Enables the GPU benchmarking extension |
| --enable-gpu-client-logging  | 	Enable GPU client logging. |
| --enable-gpu-client-tracing  | 	Enables TRACE for GL calls in the renderer. |
| --enable-gpu-command-logging  | 	Turn on Logging GPU commands. |
| --enable-gpu-debugging  | 	Turn on Calling GL Error after every command. |
| --enable-gpu-rasterization  | 	Allow heuristics to determine when a layer tile should be drawn with the Skia GPU backend. Only valid with GPU accelerated compositing + impl-side painting. |
| --enable-gpu-service-logging  | 	Turns on GPU logging (debug build only). |
| --enable-gpu-service-tracing  | 	Turns on calling TRACE for every GL call. |
| --enable-grouped-history  | 	Enables grouping websites by domain and filtering them by period. |
| --enable-handle-auditing  | 	Enumerates and prints a child process' most dangerous handles when it is terminated. |
| --enable-handle-auditing-all  | 	The same as kAuditHandles except all handles are enumerated. |
| --enable-hardware-overlays  | 	Enable compositing individual elements via hardware overlays when permitted by device. |
| --enable-harfbuzz-rendertext  | 	Enables the HarfBuzz port of RenderText on all platforms. |
| --enable-hotword-hardware  | 	Enables experimental hotword features specific to always-on. |
| --enable-image-color-profiles  | 	Dynamically apply color profiles to web content images. |
| --enable-impl-side-painting  | 	Paint content on the compositor thread instead of the main thread. |
| --enable-inband-text-tracks  | 	Enables support for inband text tracks in media content. |
| --enable-input-view  | 	No description |
| --enable-instant-search-clicks[7]  | 	Enables instant search clicks feature. |
| --enable-ipv6  | 	Enables IPv6 support, even if probes suggest that it may not be fully supported. Some probes may require internet connections, and this flag will allow support independent of application testing. This flag overrides "disable-ipv6" which appears elswhere in this file. |
| --enable-kiosk-mode  | 	Enable Kiosk mode for ChromeOS. Note this switch refers to retail mode rather than the kiosk app mode. |
| --enable-layer-squashing  | 	Enables experimental feature that maps multiple RenderLayers to one composited layer to avoid pathological layer counts. |
| --enable-lcd-text  | 	Enables LCD text. |
| --enable-leak-detection  | 	Enables the leak detection of loading webpages. This allows us to check whether or not reloading a webpage releases web-related objects correctly. |
| --enable-link-disambiguation-popup  | 	Enables a zoomed popup bubble that allows the user to select a link. |
| --enable-linkable-ephemeral-apps  | 	Enables experimentation with launching ephemeral apps via hyperlinks. |
| --enable-local-file-accesses[7]  | 	Enable file accesses for debug. |
| --enable-logging  | 	Force logging to be enabled. Logging is disabled by default in release builds. |
| --enable-low-res-tiling  | 	When using CPU rasterizing generate low resolution tiling. Low res tiles may be displayed during fast scrolls especially on slower devices. |
| --enable-main-frame-before-activation  | 	Enables sending the next BeginMainFrame before the previous commit activates. |
| --enable-manager-for-sync-signin  | 	Enable saving and filling for the sync signin form. Currently the default behavior. |
| --enable-material-design-ntp  | 	Enables the Material Design NTP. |
| --enable-memory-benchmarking  | 	Enables the memory benchmarking extension |
| --enable-message-center-always-scroll-up-upon-notification-removal  | 	Enables message center to always move other notifications upwards when a notification is removed, no matter whether the message center is displayed top down or not. |
| --enable-mojo-serial-service  | 	Enables the mojo implementation of the serial API. |
| --enable-nacl  | 	Runs the Native Client inside the renderer process and enables GPU plugin (internally adds lEnableGpuPlugin to the command line). |
| --enable-nacl-debug  | 	Enables debugging via RSP over a socket. |
| --enable-nacl-nonsfi-mode  | 	Enables Non-SFI mode, in which programs can be run without NaCl's SFI sandbox. |
| --enable-native-gpu-memory-buffers  | 	Enable native GPU memory buffer support when available. |
| --enable-natural-scroll-default  | 	Enables natural scroll by default. |
| --enable-net-benchmarking  | 	Enables the network-related benchmarking extensions. |
| --enable-network-information  | 	Enables the network information API. |
| --enable-network-portal-notification  | 	Enables notifications about captive portals in session. |
| --enable-new-avatar-menu  | 	Enable the new avatar menu and the User Manager. |
| --enable-new-korean-ime  | 	If this switch is set, the new Korean IME will be available in chrome://settings/languages. |
| --enable-new-qp-input-view  | 	If this switch is set, the input view keyboard will be in materia design. |
| --enable-npn-http  | 	Enables NPN with HTTP. It means NPN is enabled but SPDY won't be used. HTTP is still used for all requests. |
| --enable-offline-auto-reload  | 	Enable auto-reload of error pages if offline. |
| --enable-offline-auto-reload-visible-only  | 	Only auto-reload error pages when the tab is visible. |
| --enable-offline-load-stale-cache  | 	Enable/Disable offering a "Load stale copy" option to the user if offline. |
| --enable-one-copy  | 	Enable rasterizer that writes directly to GPU memory. |
| --enable-origin-chip-always  | 	Controls which branch of the origin chip in location bar experiment is enabled. We're using independent flags here (as opposed to a common flag with different values) to be able to enable/disable the entire experience associated with this feature server-side from the FieldTrial (the complete experience includes other flag changes as well). It is not currently possible to do that with "flag=value" flags. |
| --enable-origin-chip-on-srp  | 	No description |
| --enable-out-of-process-pdf  | 	Enable the out of process PDF plugin. |
| --enable-overlay-fullscreen-video  | 	Enables use of hardware overlay for fullscreen video playback. Android only. |
| --enable-overlay-scrollbar  | 	Enables overlay scrollbars on Aura or Linux. Does nothing on Mac. |
| --enable-override-bookmarks-ui  | 	Enables extensions to hide bookmarks UI elements. |
| --enable-panels  | 	Enables panels (always on-top docked pop-up windows). |
| --enable-password-generation  | 	Enables password generation when we detect that the user is going through account creation. |
| --enable-password-link  | 	Enable the link in the password manager settings page that points to account central. |
| --enable-pepper-testing  | 	Enables the testing interface for PPAPI. |
| --enable-permissions-bubbles  | 	Use bubbles for content permissions requests instead of infobars. |
| --enable-physical-keyboard-autocorrect  | 	If this switch is set, the US keyboard input method will provide suggestions as typing on physical keyboard. |
| --enable-pinch  | 	Enables compositor-accelerated touch-screen pinch gestures. |
| --enable-pinch-virtual-viewport  | 	Virtual viewport for fixed-position elements, scrollbars during pinch. |
| --enable-pixel-output-in-tests  | 	Forces tests to produce pixel output when they normally wouldn't. |
| --enable-plugin-placeholder-shadow-dom  | 	Enables presenting plugin placeholder content as shadow DOM. |
| --enable-plugin-power-saver[1]  | 	Enables the plugin power saver feature. |
| --enable-power-overlay  | 	Enables the Power overlay in Settings. |
| --enable-precache  | 	Enables the proactive populating of the disk cache with Web resources that are likely to be needed in future page fetches. |
| --enable-precise-memory-info  | 	Make the values returned to window.performance.memory more granular and more up to date in shared worker. Without this flag, the memory information is still available, but it is bucketized and updated less frequently. This flag also applys to workers. |
| --enable-prefer-compositing-to-lcd-text  | 	Enable the creation of compositing layers when it would prevent LCD text. |
| --enable-print-preview-register-promos  | 	Enables showing unregistered printers in print preview |
| --enable-privet-storage  | 	Enable Privet storage. |
| --enable-profile-shortcut-manager[4]  | 	Force-enables the profile shortcut manager. This is needed for tests since they use a custom-user-data-dir which disables this. |
| --enable-profiling  | 	Enables tracking of tasks in profiler for viewing via about:profiler. To predominantly disable tracking (profiling), use the command line switch: --enable-profiling=0 Some tracking will still take place at startup, but it will be turned off during chrome_browser_main. |
| --enable-proximity-auth-proximity-detection  | 	Enables close proximity detection. This allows the user to set a setting to require very close proximity between the remote device and the local device in order to unlock the local device, which trades off convenience for security. |
| --enable-query-extraction  | 	Enables query in the omnibox. |
| --enable-quic  | 	Enables support for the QUIC protocol. This is a temporary testing flag. |
| --enable-quic-pacing  | 	Disable use of pacing of QUIC packets. This only has an effect if QUIC protocol is enabled. |
| --enable-quic-port-selection  | 	Enable use of Chromium's port selection for the ephemeral port via bind(). This only has an effect if QUIC protocol is enabled. |
| --enable-reader-mode-toolbar-icon  | 	Enables context-sensitive reader mode button in the toolbar. |
| --enable-region-based-columns  | 	Enables the CSS multicol implementation that uses the regions implementation. |
| --enable-renderer-mojo-channel  | 	Replaces renderer-browser IPC channel with ChnanelMojo. |
| --enable-request-tablet-site  | 	Enables request of tablet site (via user agent override). |
| --enable-roboto-font-ui[5]  | 	Enables Roboto as UI font (instead of Noto Sans) experiment in both native and web UI. |
| --enable-sandbox-logging  | 	Cause the OS X sandbox write to syslog every time an access to a resource is denied by the sandbox. |
| --enable-save-password-bubble  | 	Enables save password prompt bubble. |
| --enable-screenshot-testing-with-mode  | 	Enables using screenshots in tests and seets mode. |
| --enable-scripts-require-action  | 	FeatureSwitch and about_flags don't play nice. Feature switch expects either --enable-<feature> or --<feature>=1, but about_flags expects the command line argument to enable it (or a selection). Hack this in, so enabling it in about_flags enables the feature. Appending this flag has the same effect as --scripts-require-action=1. |
| --enable-scroll-prediction  | 	Enable scroll prediction for scroll update events. |
| --enable-sdch-over-https  | 	Enables SDCH for https schemes. |
| --enable-search-button-in-omnibox-always  | 	Controls which branch of the "search button in omnibox" experiment is enabled. We're using independent flags here (as opposed to a common flag with different values) to be able to enable/disable the entire experience associated with this feature server-side from the FieldTrial (the complete experience includes other flag changes as well). It is not currently possible to do that with "flag=value" flags. |
| --enable-search-button-in-omnibox-for-str  | 	No description |
| --enable-search-button-in-omnibox-for-str-or-iip  | 	No description |
| --enable-seccomp-filter-sandbox  | 	Enables seccomp-bpf support for Android. Requires experimental kernel support. <http://crbug.com/166704> |
| --enable-service-worker-sync  | 	Enable support for sync events in ServiceWorkers. |
| --enable-session-crashed-bubble  | 	Enables using bubbles for session restore request instead of infobars. |
| --enable-settings-window  | 	Enable or disable settings in a separate browser window per profile (see SettingsWindowEnabled() below). |
| --enable-share-group-async-texture-upload  | 	Allows async texture uploads (off main thread) via GL context sharing. |
| --enable-show-modal-dialog  | 	Enables the deprecated window.showModalDialog API. This is slated for removal. |
| --enable-single-click-autofill  | 	Enables/disables suggestions without typing anything (on first click). |
| --enable-skia-benchmarking  | 	Enables the Skia benchmarking extension |
| --enable-slimming-paint  | 	Enables slimming paint: http://www.chromium.org/blink/slimming-paint |
| --enable-smooth-scrolling  | 	On platforms that support it, enables smooth scroll animation. |
| --enable-spatial-navigation  | 	Enable spatial navigation |
| --enable-spdy-proxy-auth  | 	Enable the data reduction proxy. |
| --enable-spdy-proxy-dev-auth-origin  | 	Enables the origin of the data reduction proxy dev. |
| --enable-spdy4  | 	Enable SPDY/4, aka HTTP/2. This is a temporary testing flag. |
| --enable-speech-dispatcher[12]  | 	Allows sending text-to-speech requests to speech-dispatcher, a common Linux speech service. Because it's buggy, the user must explicitly enable it so that visiting a random webpage can't cause instability. |
| --enable-speech-recognition[7]  | 	Enable the recognition part of the Web Speech API. |
| --enable-spelling-auto-correct[13]  | 	Enables auto correction for misspelled words. |
| --enable-spelling-feedback-field-trial[13]  | 	Enables participation in the field trial for user feedback to spelling service. |
| --enable-ssl-connect-job-waiting  | 	Enables a feature that holds back some SSLConnectJobs in order to minimize the number of full SSL handshakes completed. |
| --enable-stale-while-revalidate  | 	Enables implementation of the Cache-Control: stale-while-revalidate directive which permits servers to allow the use of stale resources while revalidation proceeds in the background. |
| --enable-stats-collection-bindings  | 	Specifies if the `` needs to be bound in the renderer. This binding happens on per-frame basis and hence can potentially be a performance bottleneck. One should only enable it when running a test that needs to access the provided statistics. |
| --enable-stats-table  | 	Enables StatsTable, logging statistics to a global named shared memory table. |
| --enable-streamlined-hosted-apps  | 	Enables an experimental hosted app experience. |
| --enable-strict-site-isolation  | 	Experimentally ensures that each renderer process: 1) Only handles rendering for pages from a single site, apart from iframes. (Note that a page can reference content from multiple origins due to images, JavaScript files, etc. Cross-site iframes are also loaded in-process.) 2) Only has authority to see or use cookies for the page's top-level origin. (So if a.com iframes b.com, the b.com network request will be sent without cookies.) This is expected to break compatibility with many pages for now. Unlike the --site-per-process flag, this allows cross-site iframes, but it blocks all cookies on cross-site requests. |
| --enable-subscribe-uniform-extension  | 	Enable WebGL subscribe uniform extension. |
| --enable-suggestions-service  | 	Enables the suggestions service. |
| --enable-supervised-user-blacklist  | 	Enables the supervised user host blacklist. |
| --enable-supervised-user-safesites  | 	Enables SafeSites filtering for supervised users. |
| --enable-swipe-selection  | 	No description |
| --enable-sync-app-list  | 	Enables syncing of the app list independent of extensions. |
| --enable-sync-articles  | 	Enables synced articles. |
| --enable-sync-synced-notifications  | 	Enables synced notifications. |
| --enable-tab-audio-muting  | 	Enables user control over muting tab audio from the tab strip. |
| --enable-tcp-fastopen  | 	Enable use of experimental TCP sockets API for sending data in the SYN packet. |
| --enable-text-input-focus-manager  | 	Enables an experimental focus manager to track text input clients. |
| --enable-threaded-compositing  | 	Enabled threaded compositing for layout tests. |
| --enable-threaded-texture-mailboxes  | 	Simulates shared textures when share groups are not available. Not available everywhere. |
| --enable-thumbnail-retargeting  | 	Enables fanciful thumbnail processing. Used with NTP for instant-extended-api, where thumbnails are generally smaller. |
| --enable-top-controls-position-calculation  | 	No description |
| --enable-touch-drag-drop  | 	Enables touch event based drag and drop. |
| --enable-touch-editing  | 	Enables controls that support touch base text editing. |
| --enable-trace-app-source  | 	Pass launch source to platform apps. |
| --enable-tracing  | 	Enable tracing during the execution of browser tests. |
| --enable-tracing-output  | 	The filename to write the output of the test tracing to. |
| --enable-transition-compositing  | 	Enable/Disable the creation of compositing layers for RenderLayers with a transition on a property that supports accelerated animation (that is, opacity, -webkit-transform, and -webkit-filter), even when no animation is running. These options allow for three possible scenarios: 1. Default (enabled only if we dectect a highDPI display) 2. Enabled always. 3. Disabled always. |
| --enable-translate-new-ux  | 	Enables Translate experimental new UX which replaces the infobar. |
| --enable-transparent-visuals[14]  | 	When enabled, tries to get a transparent X11 visual so that we can have per-pixel alpha in windows. TODO(erg): Remove this switch once we've stabilized the code path. http://crbug.com/369209 |
| --enable-unsafe-es3-apis  | 	Enable OpenGL ES 3 APIs without proper service side validation. |
| --enable-user-controlled-alternate-protocol-ports  | 	Enables Alternate-Protocol when the port is user controlled (> 1024). |
| --enable-usermedia-screen-capturing  | 	Enable screen capturing support for MediaStream API. |
| --enable-v8-idle-notification-after-commit  | 	Send a notification from RenderWidgetCompositor to V8 to do idle work (e.g. garbage collection) after the commit until the beginning of the next frame. This moves the work off the critical path where compositor is waiting for the main thread. The flag is experimental until the implementation of the V8 idle handler is completed. |
| --enable-v8-script-streaming  | 	Enables streaming scripts to V8 while loading. |
| --enable-video-player-chromecast-support  | 	Enables the chromecast support for video player app. |
| --enable-viewport  | 	Enables the use of the @viewport CSS rule, which allows pages to control aspects of their own layout. This also turns on touch-screen pinch gestures. |
| --enable-viewport-meta  | 	Enables the use of the legacy viewport meta tag. Turning this on also turns on the @viewport CSS rule |
| --enable-virtual-keyboard  | 	No description |
| --enable-virtual-keyboard-overscroll  | 	No description |
| --enable-vtune-support  | 	Enable the Vtune profiler support. |
| --enable-web-based-signin  | 	Enables the pure web-based flow for sign in on first run/NTP/wrench menu/ settings page. |
| --enable-web-midi  | 	Enables Web MIDI API. |
| --enable-webgl-draft-extensions  | 	Enables WebGL extensions not yet approved by the community. |
| --enable-webgl-image-chromium  | 	Enables WebGL rendering into a scanout buffer for overlay support. |
| --enable-webkit-text-subpixel-positioning  | 	Enable text glyphs to have X-positions that aren't snapped to the pixel grid in webkit renderers. |
| --enable-webrtc-hw-h264-encoding[9]  | 	Enables H264 HW encode acceleration for WebRTC. |
| --enable-webrtc-hw-vp8-encoding[9]  | 	Enables VP8 HW encode acceleration for WebRTC. |
| --enable-website-settings-manager  | 	Enables the Website Settings page on the Settings page. |
| --enable-webview-based-signin  | 	Enables the webview-based flow for sign in. |
| --enable-zero-copy  | 	Enable rasterizer that writes directly to GPU memory associated with tiles. |
| --enable-zero-suggest-most-visited[7]  | 	Enables zero suggest functionality on Dev channel, showing most visited sites as default suggestions. |
| --enable-zero-suggest-most-visited-without-serp[7]  | 	Enable zero suggest functionality on Dev channel, showing most visited sites on non-search-result pages as default suggestions. |
| --enabled  | 	enabled: touch events always enabled. |
| --encode-binary  | 	Encode binary layout test results (images, audio) using base64. |
| --enforce  | 	No description |
| --enforce-gl-minimums  | 	Enforce GL minimums. |
| --enforce_strict  | 	No description |
| --enhanced-bookmarks-experiment  | 	Enable Enhanced Bookmarks. |
| --enterprise-enable-forced-re-enrollment  | 	Whether to enable forced enterprise re-enrollment. |
| --enterprise-enrollment-initial-modulus  | 	Power of the power-of-2 initial modulus that will be used by the auto-enrollment client. E.g. "4" means the modulus will be 2^4 = 16. |
| --enterprise-enrollment-modulus-limit  | 	Power of the power-of-2 maximum modulus that will be used by the auto-enrollment client. |
| --enterprise-enrollment-skip-robot-auth  | 	Don't create robot account on enrollment. Used when testing device enrollment against YAPS or the Python test server. |
| --error-console  | 	Allows the ErrorConsole to collect runtime and manifest errors, and display them in the chrome:extensions page. |
| --explicitly-allowed-ports  | 	Explicitly allows additional ports using a comma-separated list of port numbers. |
| --expose-internals-for-testing  | 	Exposes the window.internals object to JavaScript for interactive development and debugging of layout tests that rely on it. |
| --expose-ipc-echo  | 	Expose window.ipcTester object for testing |
| --extended-response  | 	No description |
| --extension-action-redesign  | 	Whether to switch to extension action redesign mode (experimental). |
| --extension-content-verification  | 	Name of the command line flag to force content verification to be on in one of various modes. |
| --extension-process  | 	Marks a renderer as extension process. |
| --extensions-install-verification  | 	Turns on extension install verification if it would not otherwise have been turned on. |
| --extensions-multi-account  | 	Enables multiple account versions of chrome.identity APIs. |
| --extensions-not-webstore  | 	Specifies a comma-separated list of extension ids that should be forced to be treated as not from the webstore when doing install verification. |
| --extensions-on-chrome-urls  | 	Enables extensions running scripts on chrome:// URLs. Extensions still need to explicitly request access to chrome:// URLs in the manifest. |
| --extensions-update-frequency  | 	Frequency in seconds for Extensions auto-update. |
| --extra-plugin-dir  | 	Load NPAPI plugins from the specified directory. |
| --extra-search-query-params  | 	Additional query params to insert in the search and instant URLs. Useful for testing. |
| --fake-cloud-policy-type[15]  | 	Registers for cloud policy using the BROWSER client type instead of the ANDROID_BROWSER or IOS_BROWSER types. This allows skipping the server whitelist. TODO(joaodasilva): remove this. http://crbug.com/248527 |
| --fake-variations-channel  | 	Fakes the channel of the browser for purposes of Variations filtering. This is to be used for testing only. Possible values are "stable", "beta", "dev" and "canary". Note that this only applies if the browser's reported channel is UNKNOWN. |
| --fast-start  | 	If this flag is present then this command line is being delegated to an already running chrome process via the fast path, ie: before chrome.dll is loaded. It is useful to tell the difference for tracking purposes. |
| --fast-user-switching  | 	Allows displaying the list of existing profiles in the avatar bubble for fast switching between profiles. |
| --feedback-server  | 	Alternative feedback server to use when submitting user feedback |
| --filemgr-ext-path[16]  | 	Enables overriding the path of file manager extension. |
| --first-exec-after-boot  | 	Passed to Chrome the first time that it's run after the system boots. Not passed on restart after sign out. |
| --flag-switches-begin  | 	These two flags are added around the switches about:flags adds to the command line. This is useful to see which switches were added by about:flags on about:version. They don't have any effect. |
| --flag-switches-end  | 	No description |
| --font-cache-shared-mem-suffix[4]  | 	DirectWrite FontCache is shared by browser to renderers using shared memory. This switch allows specifying suffix to shared memory section name to avoid clashes between different instances of Chrome. |
| --force-app-mode  | 	Forces application mode. This hides certain system UI elements and forces the app to be installed if it hasn't been already. |
| --force-desktop[4]  | 	For the DelegateExecute verb handler to launch Chrome in desktop mode on Windows 8 and higher. Used when relaunching metro Chrome. |
| --force-dev-mode-highlighting  | 	Whether to force developer mode extensions highlighting. |
| --force-device-scale-factor  | 	Overrides the device scale factor for the browser UI and the contents. |
| --force-directshow[4]  | 	Used to troubleshoot problems with different video capture implementations on Windows. By default we use the Media Foundation API on Windows 7 and up, but specifying this switch will force use of DirectShow always. See bug: http://crbug.com/268412 |
| --force-display-list-2d-canvas  | 	No description |
| --force-fieldtrials  | 	This option can be used to force field trials when testing changes locally. The argument is a list of name and value pairs, separated by slashes. If a trial name is prefixed with an asterisk, that trial will start activated. For example, the following argument defines two trials, with the second one activated: "GoogleNow/Enable/*MaterialDesignNTP/Default/" This option is also used by the browser to send the list of trials to renderers, using the same format. See FieldTrialList::CreateTrialsFromString() in field_trial.h for details. |
| --force-first-run  | 	Displays the First Run experience when the browser is started, regardless of whether or not it's actually the First Run (this overrides kNoFirstRun). |
| --force-first-run-ui  | 	Forces first-run UI to be shown for every login. |
| --force-gpu-mem-available-mb  | 	Sets the total amount of memory that may be allocated for GPU resources |
| --force-gpu-rasterization  | 	Always use the Skia GPU backend for drawing layer tiles. Only valid with GPU accelerated compositing + impl-side painting. Overrides the kEnableGpuRasterization flag. |
| --force-immersive[4]  | 	For the DelegateExecute verb handler to launch Chrome in metro mode on Windows 8 and higher. Used when relaunching metro Chrome. |
| --force-login-manager-in-tests  | 	Usually in browser tests the usual login manager bringup is skipped so that tests can change how it's brought up. This flag disables that. |
| --force-mediafoundation[4]  | 	Force the use of MediaFoundation for video capture. This is only supported in Windows 7 and above. Used, like `kForceDirectShowVideoCapture`, to troubleshoot problems in Windows platforms. |
| --force-qtkit[3]  | 	QTKit is the media capture API predecessor to AVFoundation, available up and until Mac OS X 10.9 (despite being deprecated in this last one). This flag is used for troubleshooting and testing, and forces QTKit in builds and configurations where AVFoundation would be used otherwise. |
| --force-renderer-accessibility  | 	Force renderer accessibility to be on instead of enabling it on demand when a screen reader is detected. The disable-renderer-accessibility switch overrides this if present. |
| --force-text-blobs  | 	Always use text blob rendering, overriding kDisableTextBlobs and any heuristics that may otherwise disable it. TODO(fmalita): remove after --disable-impl-side-painting is phased out. |
| --force-use-overlay-embedded-video[7]  | 	Always use the video overlay for the embedded video. This switch is intended only for tests. |
| --force-variation-ids  | 	Forces additional Chrome Variation Ids that will be sent in X-Client-Data header, specified as a 64-bit encoded list of numeric experiment ids. Ids prefixed with the character "t" will be treated as Trigger Variation Ids. |
| --force-wave-audio[4]  | 	Use Windows WaveOut/In audio API even if Core Audio is supported. |
| --full-memory-crash-report  | 	Generates full memory crash dump. |
| --gaia-url  | 	No description |
| --gl-shader-interm-output  | 	Include ANGLE's intermediate representation (AST) output in shader compilation info logs. |
| --golden-screenshots-dir  | 	Screenshot testing: specifies the directory where the golden screenshots are stored. |
| --google-apis-url  | 	No description |
| --google-base-url  | 	Specifies an alternate URL to use for speaking to Google. Useful for testing. |
| --google-profile-info  | 	Enables using GAIA information to populate profile name and icon. |
| --gpu-device-id  | 	Passes gpu device_id from browser process to GPU process. |
| --gpu-driver-bug-workarounds  | 	Pass a set of GpuDriverBugWorkaroundType ids, seperated by ','. |
| --gpu-driver-vendor  | 	Passes gpu driver_vendor from browser process to GPU process. |
| --gpu-driver-version  | 	Passes gpu driver_version from browser process to GPU process. |
| --gpu-launcher  | 	Extra command line options for launching the GPU process (normally used for debugging). Use like renderer-cmd-prefix. |
| --gpu-no-context-lost  | 	Inform Chrome that a GPU context will not be lost in power saving mode, screen saving mode, etc. Note that this flag does not ensure that a GPU context will never be lost in any situations, say, a GPU reset. |
| --gpu-process  | 	Makes this process a GPU sub-process. |
| --gpu-program-cache-size-kb  | 	Sets the maximum size of the in-memory gpu program cache, in kb |
| --gpu-sandbox-allow-sysv-shm  | 	Allows shmat() system call in the GPU sandbox. |
| --gpu-sandbox-failures-fatal  | 	Makes GPU sandbox failures fatal. |
| --gpu-sandbox-start-early  | 	Starts the GPU sandbox before creating a GL context. |
| --gpu-startup-dialog  | 	Causes the GPU process to display a dialog on launch. |
| --gpu-vendor-id  | 	Passes gpu vendor_id from browser process to GPU process. |
| --gssapi-library-name  | 	Specifies a custom name for the GSSAPI library to load. |
| --h  | 	No description |
| --has-chromeos-diamond-key  | 	If true, the Chromebook has a keyboard with a diamond key. |
| --has-chromeos-keyboard  | 	If true, the Chromebook has a Chrome OS keyboard. Don't use the flag for Chromeboxes. |
| --help  | 	No description |
| --hide-icons  | 	Makes Windows happy by allowing it to show "Enable access to this program" checkbox in Add/Remove Programs->Set Program Access and Defaults. This only shows an error box because the only way to hide Chrome is by uninstalling it. |
| --homedir  | 	Defines user homedir. This defaults to primary user homedir. |
| --homepage  | 	Specifies which page will be displayed in newly-opened tabs. We need this for testing purposes so that the UI tests don't depend on what comes up for http://google.com. |
| --host-pairing-oobe  | 	With this switch, start remora OOBE with the pairing screen. |
| --host-resolver-parallelism  | 	The maximum number of concurrent host resolve requests (i.e. DNS) to allow (not counting backup attempts which would also consume threads). --host-resolver-retry-attempts must be set to zero for this to be exact. |
| --host-resolver-retry-attempts  | 	The maximum number of retry attempts to resolve the host. Set this to zero to disable host resolver retry attempts. |
| --host-resolver-rules  | 	These mappings only apply to the host resolver. |
| --host-rules  | 	Comma-separated list of rules that control how hostnames are mapped. For example: "MAP * 127.0.0.1" --> Forces all hostnames to be mapped to 127.0.0.1 "MAP *.google.com proxy" --> Forces all google.com subdomains to be resolved to "proxy". "MAP test.com [::1]:77 --> Forces "test.com" to resolve to IPv6 loopback. Will also force the port of the resulting socket address to be 77. "MAP * baz, EXCLUDE www.google.com" --> Remaps everything to "baz", except for "www.google.com". These mappings apply to the endpoint host in a net::URLRequest (the TCP connect and host resolver in a direct connection, and the CONNECT in an http proxy connection, and the endpoint host in a SOCKS proxy connection). |
| --http-port  | 	No description |
| --ignore-autocomplete-off-autofill  | 	Ignores autocomplete="off" for Autofill data (profiles + credit cards). |
| --ignore-certificate-errors  | 	Ignores certificate-related errors. |
| --ignore-gpu-blacklist  | 	Ignores GPU blacklist. |
| --ignore-resolution-limits-for-accelerated-video-decode  | 	Bypass autodetection of the upper limit on resolution of streams that can be hardware decoded. |
| --ignore-urlfetcher-cert-requests  | 	Causes net::URLFetchers to ignore requests for SSL client certificates, causing them to attempt an unauthenticated SSL/TLS session. This is intended for use when testing various service URLs (eg: kPromoServerURL, kSbURLPrefix, kSyncServiceURL, etc) |
| --ignore-user-profile-mapping-for-tests  | 	If true, profile selection in UserManager will always return active user's profile. TODO(nkostlyev): http://crbug.com/364604 - Get rid of this switch after we turn on multi-profile feature on ChromeOS. |
| --in-process-gpu  | 	Run the GPU process as a thread in the browser process. |
| --incognito  | 	Causes the browser to launch directly in incognito mode. |
| --install  | 	No description |
| --install-chrome-app  | 	Causes Chrome to initiate an installation flow for the given app. |
| --install-ephemeral-app-from-webstore  | 	Causes Chrome to attempt to get metadata from the webstore for the app/extension ID given, and then prompt the user to download and install it. This is allowed *only* for ephemeral apps. All other ids will be ignored. |
| --instant-process  | 	Marks a renderer as an Instant process. |
| --invalidation-use-gcm-channel  | 	Invalidation service should use GCM network channel even if experiment is not enabled. |
| --ipc-connection-timeout  | 	Overrides the timeout, in seconds, that a child process waits for a connection from the browser before killing itself. |
| --ipc-fuzzer-testcase  | 	Specifies the testcase used by the IPC fuzzer. |
| --javascript-harmony  | 	Enables experimental Harmony (ECMAScript 6) features. |
| --js-flags  | 	Specifies the flags passed to JS engine |
| --keep-alive-for-test  | 	Used for testing - keeps browser alive after last browser window closes. |
| --kiosk  | 	Enable Kiosk mode. |
| --kiosk-mode-screensaver-path  | 	Path for the screensaver used in Kiosk mode |
| --kiosk-printing  | 	Print automatically in kiosk mode. `kKioskMode` must be set as well. See http://crbug.com/31395. |
| --lang  | 	The language file that we want to try to open. Of the form language[-country] where language is the 2 letter code from ISO-639. |
| --learning  | 	Speculative resource prefetching will only learn about resources that need to be prefetched but will not prefetch them. |
| --load-and-launch-app  | 	Loads an app from the specified directory and launches it. |
| --load-apps  | 	Path to a comma-separated list of apps to load at startup. The first app in the list will be launched. |
| --load-component-extension  | 	Comma-separated list of directories with component extensions to load. |
| --load-extension  | 	Loads an extension from the specified directory. |
| --load-plugin  | 	Load an NPAPI plugin from the specified path. |
| --local-heuristics-only-for-password-generation  | 	Removes the requirement that we recieved a ping from the autofill servers and that the user doesn't have the given form blacklisted. Used in testing. |
| --log-gpu-control-list-decisions  | 	Logs GPU control list decisions when enforcing blacklist rules. |
| --log-level  | 	Sets the minimum log level. Valid values are from 0 to 3: INFO = 0, WARNING = 1, LOG_ERROR = 2, LOG_FATAL = 3. |
| --log-net-log  | 	Enables saving net log events to a file and sets the file name to use. |
| --log-plugin-messages  | 	Make plugin processes log their sent and received messages to VLOG(1). |
| --login-manager  | 	Enables Chrome-as-a-login-manager behavior. |
| --login-profile  | 	Specifies the profile to use once a chromeos user is logged in. This parameter is ignored if user goes through login screen since user_id hash defines which profile directory to use. In case of browser restart within active session this parameter is used to pass user_id hash for primary user. |
| --login-user  | 	Specifies the user which is already logged in. |
| --low-end-device-mode  | 	Force low-end device when set to 1; Auto-detect low-end device when set to 2; Force non-low-end device when set to other values or empty; |
| --lso-url  | 	No description |
| --main-frame-resizes-are-orientation-changes  | 	Resizes of the main frame are the caused by changing between landscape and portrait mode (i.e. Android) so the page should be rescaled to fit |
| --make-default-browser  | 	Makes Chrome default browser |
| --managed-user-id  | 	Sets the supervised user ID for any loaded or newly created profile to the given value. Pass an empty string to mark the profile as non-supervised. Used for testing. |
| --managed-user-sync-token  | 	Used to authenticate requests to the Sync service for supervised users. Setting this switch also causes Sync to be set up for a supervised user. |
| --manual-enhanced-bookmarks  | 	Use to opt-in user into Finch experiment groups. |
| --manual-enhanced-bookmarks-optout  | 	No description |
| --max-gum-fps[9]  | 	Override the maximum framerate as can be specified in calls to getUserMedia. This flag expects a value. Example: --max-gum-fps=17.5 |
| --max-tiles-for-interest-area  | 	Max tiles allowed for each tilings interest area. |
| --max-untiled-layer-height  | 	Sets the width and height above which a composited layer will get tiled. |
| --max-untiled-layer-width  | 	No description |
| --max-unused-resource-memory-usage-percentage  | 	The amount of unused resource memory compositor is allowed to keep around. |
| --media-cache-size  | 	Forces the maximum disk space to be used by the media cache, in bytes. |
| --mediadrm-enable-non-compositing[7]  | 	Enables use of non-compositing MediaDrm decoding by default for Encrypted Media Extensions implementation. |
| --memory-metrics  | 	Sample memory usage with high frequency and store the results to the Renderer.Memory histogram. Used in memory tests. |
| --message-loop-histogrammer  | 	Enables histograming of tasks served by MessageLoop. See about:histograms/Loop for results, which show frequency of messages on each thread, including APC count, object signalling count, etc. |
| --metrics-recording-only  | 	Enables the recording of metrics reports but disables reporting. In contrast to kDisableMetrics, this executes all the code that a normal client would use for reporting, except the report is dropped rather than sent to the server. This is useful for finding issues in the metrics code during UI and performance tests. |
| --migrate-data-dir-for-sxs[12]  | 	Triggers migration of user data directory to another directory specified as a parameter. The migration is done under singleton lock, and sanity checks are made to avoid corrupting the profile. The browser exits after migration is complete. |
| --mock  | 	No description |
| --mute-audio  | 	Mutes audio sent to the audio device so it is not audible during automated testing. |
| --nacl-broker  | 	Value for --type that causes the process to run as a NativeClient broker (used for launching NaCl loader processes on 64-bit Windows). |
| --nacl-dangerous-no-sandbox-nonsfi  | 	Disable sandbox even for non SFI mode. This is particularly unsafe as non SFI NaCl heavily relies on the seccomp sandbox. |
| --nacl-debug-mask  | 	Uses NaCl manifest URL to choose whether NaCl program will be debugged by debug stub. Switch value format: [!]pattern1,pattern2,...,patternN. Each pattern uses the same syntax as patterns in Chrome extension manifest. The only difference is that * scheme matches all schemes instead of matching only http and https. If the value doesn't start with !, a program will be debugged if manifest URL matches any pattern. If the value starts with !, a program will be debugged if manifest URL does not match any pattern. |
| --nacl-gdb  | 	Native Client GDB debugger that will be launched automatically when needed. |
| --nacl-gdb-script  | 	GDB script to pass to the nacl-gdb debugger at startup. |
| --nacl-loader  | 	Value for --type that causes the process to run as a NativeClient loader for SFI mode. |
| --nacl-loader-nonsfi  | 	Value for --type that causes the process to run as a NativeClient loader for non SFI mode. |
| --net-log-level  | 	Sets the base logging level for the net log. Log 0 logs the most data. Intended primarily for use with --log-net-log. |
| --network-country-iso[7]  | 	The telephony region (ISO country code) to use in phone number detection. |
| --new-profile-management  | 	Enables new profile management system, including lock mode. |
| --new-window  | 	Launches URL in new browser window. |
| --NewProfileManagement  | 	No description |
| --no-announcement  | 	No description |
| --no-default-browser-check  | 	Disables the default browser check. Useful for UI/browser tests where we want to avoid having the default browser info-bar displayed. |
| --no-displaying-insecure-content  | 	By default, an https page can load images, fonts or frames from an http page. This switch overrides this to block this lesser mixed-content problem. |
| --no-events  | 	Don't record/playback events when using record & playback. |
| --no-experiments  | 	Disables all experiments set on about:flags. Does not disable about:flags itself. Useful if an experiment makes chrome crash at startup: One can start chrome with --no-experiments, disable the problematic lab at about:flags and then restart chrome without this switch again. |
| --no-first-run  | 	Skip First Run tasks, whether or not it's actually the First Run. Overridden by kForceFirstRun. This does not drop the First Run sentinel and thus doesn't prevent first run from occuring the next time chrome is launched without this flag. |
| --no-managed-user-acknowledgment-check  | 	Disables checking whether we received an acknowledgment when registering a supervised user. Also disables the timeout during registration that waits for the ack. Useful when debugging against a server that does not support notifications. |
| --no-message-box  | 	Disable ui::MessageBox. This is useful when running as part of scripts that do not have a user interface. |
| --no-network-profile-warning  | 	Whether or not the browser should warn if the profile is on a network share. This flag is only relevant for Windows currently. |
| --no-pings  | 	Don't send hyperlink auditing pings |
| --no-proxy-server  | 	Don't use a proxy server, always make direct connections. Overrides any other proxy server flags that are passed. |
| --no-referrers  | 	Don't send HTTP-Referer headers. |
| --no-sandbox  | 	Disables the sandbox for all process types that are normally sandboxed. |
| --no-service-autorun  | 	Disables the service process from adding itself as an autorun process. This does not delete existing autorun registrations, it just prevents the service from registering a new one. |
| --no-startup-window  | 	Does not automatically open a browser window on startup (used when launching Chrome for the purpose of hosting background apps). |
| --noerrdialogs  | 	Suppresses all error dialogs when present. |
| --num-pac-threads  | 	Specifies the maximum number of threads to use for running the Proxy Autoconfig (PAC) script. |
| --num-raster-threads  | 	Number of worker threads used to rasterize content. |
| --oauth2-client-id  | 	No description |
| --oauth2-client-secret  | 	No description |
| --oobe-guest-session  | 	Indicates that a guest session has been started before OOBE completion. |
| --oobe-skip-postlogin  | 	Skips all other OOBE pages after user login. |
| --oobe-timer-interval  | 	Interval at which we check for total time on OOBE. |
| --open-ash[17]  | 	No description |
| --origin-to-force-quic-on  | 	Force use of QUIC for requests to the specified origin. |
| --original-process-start-time  | 	The time that a new chrome process which is delegating to an already running chrome process started. (See ProcessSingleton for more details.) |
| --osmesa  | 	No description |
| --override-metrics-upload-url  | 	Override the URL to which metrics logs are sent for debugging. |
| --override-use-gl-with-osmesa-for-tests  | 	Forces the use of OSMesa instead of hardware gpu. |
| --overscroll-history-navigation  | 	Controls the behavior of history navigation in response to horizontal overscroll. Set the value to '0' to disable. Set the value to '1' to enable the behavior where pages slide in and out in response to the horizontal overscroll gesture and a screenshot of the target page is shown. Set the value to '2' to enable the simplified overscroll UI where a navigation arrow slides in from the side of the screen in response to the horizontal overscroll gesture. Defaults to '1'. |
| --ozone-dump-file  | 	Specify location for image dumps. |
| --ozone-initial-display-bounds  | 	Specifies the size of the primary display at initialization. |
| --ozone-initial-display-physical-size-mm  | 	Specifies the physical display size in millimeters. |
| --ozone-platform  | 	Specify ozone platform implementation to use. |
| --ozone-test-single-overlay-support  | 	Enable support for a single overlay plane. |
| --ozone-use-surfaceless  | 	Specify if the accelerated path should use surfaceless rendering. In this mode there is no EGL surface. |
| --pack-extension  | 	Packages an extension to a .crx installable file from a given directory. |
| --pack-extension-key  | 	Optional PEM private key to use in signing packaged .crx. |
| --parent-profile  | 	Specifies the path to the user data folder for the parent profile. |
| --password-store[18]  | 	Specifies which password store to use (detect, default, gnome, kwallet). |
| --permission-request-api-scope  | 	Development flag for permission request API. This flag is needed until the API is finalized. TODO(bauerb): Remove when this flag is not needed anymore. |
| --permission-request-api-url  | 	Development flag for permission request API. This flag is needed until the API is finalized. TODO(bauerb): Remove when this flag is not needed anymore. |
| --playback-mode  | 	Read previously recorded data from the cache. Only cached data is read. See kRecordMode. |
| --plugin  | 	Causes the process to run as a plugin subprocess. |
| --plugin-launcher  | 	Specifies a command that should be used to launch the plugin process. Useful for running the plugin process through purify or quantify. Ex: --plugin-launcher="path\to\purify /Run=yes" |
| --plugin-path  | 	Tells the plugin process the path of the plugin to load |
| --plugin-startup-dialog  | 	Causes the plugin process to display a dialog on launch. |
| --plugins-metadata-server-url[19]  | 	Specifies a custom URL for fetching plug-ins metadata. Used for testing. |
| --power-stub  | 	Specifies power stub behavior: 'cycle=2' - Cycles power states every 2 seconds. See FakeDBusThreadManager::ParsePowerCommandLineSwitch for full details. |
| --ppapi  | 	Argument to the process type that indicates a PPAPI plugin process type. |
| --ppapi-broker  | 	Argument to the process type that indicates a PPAPI broker process type. |
| --ppapi-flash-args  | 	"Command-line" arguments for the PPAPI Flash; used for debugging options. |
| --ppapi-flash-path  | 	Use the PPAPI (Pepper) Flash found at the given path. |
| --ppapi-flash-version  | 	Report the given version for the PPAPI (Pepper) Flash. The version should be numbers separated by '.'s (e.g., "12.3.456.78"). If not specified, it defaults to "10.2.999.999". |
| --ppapi-in-process  | 	Runs PPAPI (Pepper) plugins in-process. |
| --ppapi-plugin-launcher  | 	Like kPluginLauncher for PPAPI plugins. |
| --ppapi-startup-dialog  | 	Causes the PPAPI sub process to display a dialog on launch. Be sure to use --no-sandbox as well or the sandbox won't allow the dialog to display. |
| --precache-config-settings-url  | 	The URL that provides the PrecacheConfigurationSettings proto. |
| --precache-manifest-url-prefix  | 	Precache manifests will be served from URLs with this prefix. |
| --prefetch-search-results  | 	Triggers prerendering of search base page to prefetch results for the typed omnibox query. Only has an effect when prerender is enabled. |
| --prerender  | 	Controls speculative prerendering of pages, and content prefetching. Both are dispatched from <link rel=prefetch href=...> elements. |
| --prerender-from-omnibox  | 	Triggers prerendering of pages from suggestions in the omnibox. Only has an effect when Instant is either disabled or restricted to search, and when prerender is enabled. |
| --privet-ipv6-only  | 	Use IPv6 only for privet HTTP. |
| --process-per-site  | 	Runs a single process for each site (i.e., group of pages from the same registered domain) the user visits. We default to using a renderer process for each site instance (i.e., group of pages from the same registered domain with script connections to each other). |
| --process-per-tab  | 	Runs each set of script-connected tabs (i.e., a BrowsingInstance) in its own renderer process. We default to using a renderer process for each site instance (i.e., group of pages from the same registered domain with script connections to each other). |
| --product-version  | 	Outputs the product version information and quit. Used as an internal api to detect the installed version of Chrome on Linux. |
| --profile-directory  | 	Selects directory of profile to associate with the first browser launched. |
| --profiler-timing  | 	Configure whether chrome://profiler will contain timing information. This option is enabled by default. A value of "0" will disable profiler timing, while all other values will enable it. |
| --profiling-at-start  | 	Starts the sampling based profiler for the browser process at startup. This will only work if chrome has been built with the gyp variable profiling=1. The output will go to the value of kProfilingFile. |
| --profiling-file  | 	Specifies a location for profiling output. This will only work if chrome has been built with the gyp variable profiling=1. {pid} if present will be replaced by the pid of the process. {count} if present will be incremented each time a profile is generated for this process. The default is chrome-profile-{pid}. |
| --profiling-flush  | 	Controls whether profile data is periodically flushed to a file. Normally the data gets written on exit but cases exist where chrome doesn't exit cleanly (especially when using single-process). A time in seconds can be specified. |
| --profiling-output-file  | 	Specifies a path for the output of task-level profiling which can be loaded and viewed in about:profiler. |
| --promo-server-url  | 	Specifies a custom URL for fetching NTP promo data. |
| --proxy-auto-detect  | 	Forces proxy auto-detection. |
| --proxy-bypass-list  | 	Specifies a list of hosts for whom we bypass proxy settings and use direct connections. Ignored if --proxy-auto-detect or --no-proxy-server are also specified. This is a comma-separated list of bypass rules. See: "net/proxy/proxy_bypass_rules.h" for the format of these rules. |
| --proxy-pac-url  | 	Uses the pac script at the given URL |
| --proxy-server  | 	Uses a specified proxy server, overrides system settings. This switch only affects HTTP and HTTPS requests. |
| --quic-connection-options  | 	Specifies a comma separated list of QUIC connection options to send to the server. |
| --quic-max-packet-length  | 	Specifies the maximum length for a QUIC packet. |
| --quic-version  | 	Specifies the version of QUIC to use. |
| --record-mode  | 	Chrome supports a playback and record mode. Record mode saves *everything* to the cache. Playback mode reads data exclusively from the cache. This allows us to record a session into the cache and then replay it at will. See also kPlaybackMode. |
| --reduce-security-for-testing  | 	Enables more web features over insecure connections. Designed to be used for testing purposes only. |
| --reduced-referrer-granularity  | 	Reduce the default `referer` header's granularity. |
| --register-font-files  | 	Registers additional font files on Windows (for fonts outside the usual %WINDIR%\Fonts location). Multiple files can be used by separating them with a semicolon (;). |
| --register-pepper-plugins  | 	Register Pepper plugins (see pepper_plugin_list.cc for its format). |
| --relaunch-shortcut[4]  | 	Relaunches metro Chrome on Windows 8 and higher using a given shortcut. |
| --relauncher[3]  | 	A process type (switches::kProcessType) that relaunches the browser. See chrome/browser/mac/relauncher.h. |
| --remember-cert-error-decisions  | 	Remember user proceeds through SSL interstitials for a specified amount of time. In particular, remember these decisions through session restart. The time delta to remember certificates should be specified in seconds. |
| --remote-debugging-port  | 	Enables remote debug over HTTP on the specified port. |
| --remote-debugging-socket-name[7]  | 	Enables remote debug over HTTP on the specified socket name. |
| --renderer  | 	Causes the process to run as renderer instead of as browser. |
| --renderer-assert-test  | 	Causes the renderer process to throw an assertion on launch. |
| --renderer-cmd-prefix  | 	On POSIX only: the contents of this flag are prepended to the renderer command line. Useful values might be "valgrind" or "xterm -e gdb --args". |
| --renderer-process-limit  | 	Overrides the default/calculated limit to the number of renderer processes. Very high values for this setting can lead to high memory/resource usage or instability. |
| --renderer-startup-dialog  | 	Causes the renderer process to display a dialog on launch. |
| --renderer-wait-for-java-debugger[7]  | 	Block ChildProcessMain thread of the renderer's ChildProcessService until a Java debugger is attached. |
| --require-ct-for-ev  | 	Requires presence of Certificate Transparency for Extended Validation certificates. Enforce the policy detailed at: http://dev.chromium.org/Home/chromium-security/certificate-transparency |
| --requirements  | 	No description |
| --reset-app-list-install-state  | 	If set, the app list will forget it has been installed on startup. Note this doesn't prevent the app list from running, it just makes Chrome think the app list hasn't been enabled (as in kEnableAppList) yet. |
| --reset-variation-state  | 	Forces a reset of the one-time-randomized FieldTrials on this client, also known as the Chrome Variations state. |
| --respect-autocomplete-off-autofill  | 	The "disable" flag for kIgnoreAutocompleteOffForAutofill. |
| --restore-last-session  | 	Indicates the last session should be restored on startup. This overrides the preferences value and is primarily intended for testing. The value of this switch is the number of tabs to wait until loaded before 'load completed' is sent to the ui_test. |
| --root-layer-scrolls  | 	Handles frame scrolls via the root RenderLayer instead of the FrameView. |
| --safebrowsing-disable-auto-update  | 	If present, safebrowsing only performs update when SafeBrowsingProtocolManager::ForceScheduleNextUpdate() is explicitly called. This is used for testing only. |
| --safebrowsing-disable-download-protection  | 	TODO(lzheng): Remove this flag once the feature works fine (http://crbug.com/74848). Disables safebrowsing feature that checks download url and downloads content's hash to make sure the content are not malicious. |
| --safebrowsing-disable-extension-blacklist  | 	Disables safebrowsing feature that checks for blacklisted extensions. |
| --safebrowsing-disable-side-effect-free-whitelist  | 	Disables safebrowsing feature that provides a side-effect free whitelist. |
| --sandbox-ipc  | 	Causes the process to run as a sandbox IPC subprocess. |
| --save-page-as-mhtml  | 	Disable saving pages as HTML-only, disable saving pages as HTML Complete (with a directory of sub-resources). Enable only saving pages as MHTML. See http://crbug.com/120416 for how to remove this switch. |
| --scripts-require-action  | 	Notify the user and require consent for extensions running scripts. Appending --scripts-require-action=1 has the same effect as --enable-scripts-require-action (see below). |
| --scroll-end-effect  | 	Enables or disables scroll end effect in response to vertical overscroll. Set the value to '1' to enable the feature, and set to '0' to disable. Defaults to disabled. |
| --service  | 	No description |
| --service-name  | 	No description |
| --set-token  | 	Sets a token in the token service, for testing. |
| --shill-stub  | 	Overrides network stub behavior. By default, ethernet, wifi and vpn are enabled, and transitions occur instantaneously. Multiple options can be comma separated (no spaces). Note: all options are in the format 'foo=x'. See FakeShillManagerClient::SetInitialNetworkState for implementation. Examples: 'clear=1' - Clears all default configurations 'wifi=on' - A wifi network is initially connected ('1' also works) 'wifi=off' - Wifi networks are all initially disconnected ('0' also works) 'wifi=disabled' - Wifi is initially disabled 'wifi=none' - Wifi is unavailable 'wifi=portal' - Wifi connection will be in Portal state 'cellular=1' - Cellular is initially connected 'interactive=3' - Interactive mode, connect/scan/etc requests take 3 secs |
| --show-app-list  | 	If true the app list will be shown. |
| --show-autofill-type-predictions  | 	Annotates forms with Autofill field type predictions. |
| --show-component-extension-options  | 	Makes component extensions appear in chrome://settings/extensions. |
| --show-composited-layer-borders  | 	Renders a border around compositor layers to help debug and study layer compositing. |
| --show-fps-counter  | 	Draws a heads-up-display showing Frames Per Second as well as GPU memory usage. If you also use --vmodule="head*=1" then FPS will also be output to the console log. |
| --show-icons  | 	See kHideIcons. |
| --show-layer-animation-bounds  | 	Renders a border that represents the bounding box for the layer's animation. |
| --show-nonoccluding-rects  | 	Show rects in the HUD wherever something is not known to be drawn opaque and is not considered to be occluding the pixels behind it. |
| --show-occluding-rects  | 	Show rects in the HUD wherever something is known to be drawn opaque and is considered occluding the pixels behind it. |
| --show-paint-rects  | 	Visibly render a border around paint rects in the web page to help debug and study painting behavior. |
| --show-property-changed-rects  | 	Show rects in the HUD around layers whose properties have changed. |
| --show-replica-screenspace-rects  | 	Show rects in the HUD around the screen-space transformed bounds of every layer's replica, when they have one. |
| --show-screenspace-rects  | 	Show rects in the HUD around the screen-space transformed bounds of every layer. |
| --show-surface-damage-rects  | 	Show rects in the HUD around damage as it is recorded into each render surface. |
| --signin-process  | 	Marks a renderer as the signin process. |
| --silent-debugger-extension-api  | 	Does not show an infobar when an extension attaches to a page using chrome.debugger page. Required to attach to extension background pages. |
| --silent-launch  | 	Causes Chrome to launch without opening any windows by default. Useful if one wishes to use Chrome as an ash server. |
| --simulate-critical-update  | 	Simulates a critical update being available. |
| --simulate-elevated-recovery  | 	Simulates that elevation is needed to recover upgrade channel. |
| --simulate-outdated  | 	Simulates that current version is outdated. |
| --simulate-outdated-no-au  | 	Simulates that current version is outdated and auto-update is off. |
| --simulate-printing-errors  | 	No description |
| --simulate-upgrade  | 	Simulates an update being available. |
| --single-process  | 	Runs the renderer and plugins in the same process as the browser |
| --site-per-process  | 	Experimentally enforces a one-site-per-process security policy. All cross-site navigations force process swaps, and we can restrict a renderer process's access rights based on its site. For details, see: http://www.chromium.org/developers/design-documents/site-isolation Unlike --enable-strict-site-isolation (which allows cross-site iframes), this flag does not affect which cookies are attached to cross-site requests. Support is being added to render cross-site iframes in a different process than their parent pages. |
| --skip-gpu-data-loading  | 	Skip gpu info collection, blacklist loading, and blacklist auto-update scheduling at browser startup time. Therefore, all GPU features are available, and about:gpu page shows empty content. The switch is intended only for layout tests. TODO(gab): Get rid of this switch entirely. |
| --slow-down-raster-scale-factor  | 	Re-rasters everything multiple times to simulate a much slower machine. Give a scale factor to cause raster to take that many times longer to complete, such as --slow-down-raster-scale-factor=25. |
| --sms-test-messages  | 	Sends test messages on first call to RequestUpdate (stub only). |
| --spdy-proxy-auth-fallback  | 	The origin of the data reduction proxy fallback. |
| --spdy-proxy-auth-origin  | 	The origin of the data reduction proxy. |
| --spdy-proxy-auth-value  | 	A test key for data reduction proxy authentication. |
| --spdy-proxy-dev-auth-origin  | 	The origin of the data reduction proxy dev. |
| --speculative-resource-prefetching  | 	Speculative resource prefetching. |
| --spelling-service-feedback-interval-seconds[13]  | 	Specifies the number of seconds between sending batches of feedback to spelling service. The default is 30 minutes. The minimum is 5 seconds. This switch is for temporary testing only. TODO(rouslan): Remove this flag when feedback testing is complete. Revisit by August 2013. |
| --spelling-service-feedback-url[13]  | 	Specifies the URL where spelling service feedback data will be sent instead of the default URL. This switch is for temporary testing only. TODO(rouslan): Remove this flag when feedback testing is complete. Revisit by August 2013. |
| --ssl-version-fallback-min  | 	Specifies the minimum SSL/TLS version ("ssl3", "tls1", "tls1.1", or "tls1.2") that TLS fallback will accept. |
| --ssl-version-max  | 	Specifies the maximum SSL/TLS version ("ssl3", "tls1", "tls1.1", or "tls1.2"). |
| --ssl-version-min  | 	Specifies the minimum SSL/TLS version ("ssl3", "tls1", "tls1.1", or "tls1.2"). |
| --ssl3  | 	These values aren't switches, but rather the values that kSSLVersionMax, kSSLVersionMin and kSSLVersionFallbackMin can have. |
| --stable-release-mode  | 	This makes us disable some web-platform runtime features so that we test content_shell as if it was a stable release. It is only followed when kDumpRenderTree is set. For the features' level, see http://dev.chromium.org/blink/runtime-enabled-features. |
| --start  | 	No description |
| --start-fullscreen  | 	Specifies if the browser should start in fullscreen mode, like if the user had pressed F11 right after startup. |
| --start-maximized  | 	Starts the browser maximized, regardless of any previous settings. |
| --state-path  | 	No description |
| --stop  | 	No description |
| --strict-layer-property-change-checking  | 	Check that property changes during paint do not occur. |
| --stub-cros-settings  | 	Indicates that a stub implementation of CrosSettings that stores settings in memory without signing should be used, treating current user as the owner. This option is for testing the chromeos build of chrome on the desktop only. |
| --supports-dual-gpus  | 	Indicates whether the dual GPU switching is supported or not. |
| --swiftshader  | 	No description |
| --swiftshader-path  | 	No description |
| --sync-allow-insecure-xmpp-connection  | 	Allows insecure XMPP connections for sync (for testing). |
| --sync-deferred-startup-timeout-seconds  | 	Allows overriding the deferred init fallback timeout. |
| --sync-disable-deferred-startup  | 	Enables deferring sync backend initialization until user initiated changes occur. |
| --sync-enable-get-update-avoidance  | 	Enables feature to avoid unnecessary GetUpdate requests. |
| --sync-notification-host-port  | 	Overrides the default host:port used for notifications. |
| --sync-short-initial-retry-override  | 	This flag causes sync to retry very quickly (see polling_constants.h) the when it encounters an error, as the first step towards exponential backoff. |
| --sync-touchmove  | 	No description |
| --sync-url  | 	Overrides the default server used for profile sync. |
| --system-developer-mode  | 	Indicates that the system is running in dev mode. The dev mode probing is done by session manager. |
| --tab-capture-downscale-quality  | 	Upscale defaults to "good". |
| --tab-capture-upscale-quality  | 	Scaling quality for capturing tab. Should be one of "fast", "good" or "best". One flag for upscaling, one for downscaling. Upscale defaults to "best". |
| --test-auto-update-ui  | 	Enables testing for auto update UI. |
| --test-child-process  | 	When running certain tests that spawn child processes, this switch indicates to the test framework that the current process is a child process. |
| --test-gl-lib  | 	Flag used for Linux tests: for desktop GL bindings, try to load this GL library first, but fall back to regular library if loading fails. |
| --test-name  | 	Passes the name of the current running automated test to Chrome. |
| --test-type  | 	Type of the current test harness ("browser" or "ui"). |
| --testing-fixed-http-port  | 	Allows for forcing socket connections to http/https to use fixed ports. |
| --testing-fixed-https-port  | 	No description |
| --tls1  | 	No description |
| --tls1.1  | 	No description |
| --tls1.2  | 	No description |
| --top-controls-hide-threshold  | 	Percentage of the top controls need to be hidden before they will auto hide. |
| --top-controls-show-threshold  | 	Percentage of the top controls need to be shown before they will auto show. |
| --touch-calibration[20]  | 	The calibration factors given as "<left>,<right>,<top>,<bottom>". |
| --touch-devices[21]  | 	Tells chrome to interpret events from these devices as touch events. Only available with XInput 2 (i.e. X server 1.8 or above). The id's of the devices can be retrieved from 'xinput list'. |
| --touch-events  | 	Enable support for touch events. |
| --touch-scrolling-mode  | 	No description |
| --touchcancel  | 	No description |
| --trace-shutdown  | 	Causes TRACE_EVENT flags to be recorded beginning with shutdown. Optionally, can specify the specific trace categories to include (e.g. --trace-shutdown=base,net) otherwise, all events are recorded. --trace-shutdown-file can be used to control where the trace log gets stored to since there is otherwise no way to access the result. |
| --trace-shutdown-file  | 	If supplied, sets the file which shutdown tracing will be stored into, if omitted the default will be used "chrometrace.log" in the current directory. Has no effect unless --trace-shutdown is also supplied. Example: --trace-shutdown --trace-shutdown-file=/tmp/trace_event.log |
| --trace-startup  | 	Causes TRACE_EVENT flags to be recorded from startup. Optionally, can specify the specific trace categories to include (e.g. --trace-startup=base,net) otherwise, all events are recorded. Setting this flag results in the first call to BeginTracing() to receive all trace events since startup. In Chrome, you may find --trace-startup-file and --trace-startup-duration to control the auto-saving of the trace (not supported in the base-only TraceLog component). |
| --trace-startup-duration  | 	Sets the time in seconds until startup tracing ends. If omitted a default of 5 seconds is used. Has no effect without --trace-startup, or if --startup-trace-file=none was supplied. |
| --trace-startup-file  | 	If supplied, sets the file which startup tracing will be stored into, if omitted the default will be used "chrometrace.log" in the current directory. Has no effect unless --trace-startup is also supplied. Example: --trace-startup --trace-startup-file=/tmp/trace_event.log As a special case, can be set to 'none' - this disables automatically saving the result to a file and the first manually recorded trace will then receive all events since startup. |
| --trace-to-console  | 	Sends a pretty-printed version of tracing info to the console. |
| --trace-to-file  | 	Sends trace events from these categories to a file. --trace-to-file on its own sends to default categories. |
| --trace-to-file-name  | 	Specifies the file name for --trace-to-file. If unspecified, it will go to a default file name. |
| --trace-upload-url  | 	Sets the target URL for uploading tracing data. |
| --translate-script-url  | 	Overrides the default server used for Google Translate. |
| --translate-security-origin  | 	Overrides security-origin with which Translate runs in an isolated world. |
| --trust-autofill-server-name-types  | 	Always trust server predictions for name types. |
| --trusted-spdy-proxy  | 	Disables same-origin check on HTTP resources pushed via a SPDY proxy. The value is the host:port of the trusted proxy. |
| --try-chrome-again  | 	Experimental. Shows a dialog asking the user to try chrome. This flag is to be used only by the upgrade process. |
| --try-supported-channel-layouts[4]  | 	Instead of always using the hardware channel layout, check if a driver supports the source channel layout. Avoids outputting empty channels and permits drivers to enable stereo to multichannel expansion. Kept behind a flag since some drivers lie about supported layouts and hang when used. See http://crbug.com/259165 for more details. |
| --ttl  | 	No description |
| --type  | 	The value of this switch determines whether the process is started as a renderer or plugin host. If it's empty, it's the browser. |
| --ui-disable-partial-swap  | 	Disable partial swap which is needed for some OpenGL drivers / emulators. |
| --ui-disable-threaded-compositing  | 	No description |
| --ui-enable-impl-side-painting  | 	No description |
| --ui-enable-zero-copy  | 	No description |
| --ui-show-fps-counter  | 	No description |
| --ui-show-layer-animation-bounds  | 	No description |
| --ui-show-layer-borders  | 	No description |
| --ui-show-nonoccluding-rects  | 	No description |
| --ui-show-occluding-rects  | 	No description |
| --ui-show-paint-rects  | 	No description |
| --ui-show-property-changed-rects  | 	No description |
| --ui-show-replica-screenspace-rects  | 	No description |
| --ui-show-screenspace-rects  | 	No description |
| --ui-show-surface-damage-rects  | 	No description |
| --unicast-respond  | 	No description |
| --uninstall  | 	No description |
| --unlimited-storage  | 	Overrides per-origin quota settings to unlimited storage for any apps/origins. This should be used only for testing purpose. |
| --use-cras[22]  | 	Use CRAS, the ChromeOS audio server. |
| --use-discardable-memory  | 	Overrides the preferred discardable memory implementation. |
| --use-fake-device-for-media-stream  | 	Use fake device for Media Stream to replace actual camera and microphone. |
| --use-fake-ui-for-media-stream  | 	Bypass the media stream infobar by selecting the default device for media streams (e.g. WebRTC). Works with --use-fake-device-for-media-stream. |
| --use-file-for-fake-audio-capture  | 	Play a .wav file as the microphone. Note that for WebRTC calls we'll treat the bits as if they came from the microphone, which means you should disable audio processing (lest your audio file will play back distorted). Also the wav file will have to have the same number of channels, bits per sample and sampling frequency as the system's input device. |
| --use-file-for-fake-video-capture  | 	Use an .y4m file to play as the webcam. See the comments in media/video/capture/file_video_capture_device.h for more details. |
| --use-gl  | 	Select which implementation of GL the GPU process should use. Options are: desktop: whatever desktop OpenGL the user has installed (Linux and Mac default). egl: whatever EGL / GLES2 the user has installed (Windows default - actually ANGLE). osmesa: The OSMesa software renderer. |
| --use-gpu-in-tests  | 	Use hardware gpu, if available, for tests. |
| --use-image-texture-target  | 	Overrides the default texture target used with CHROMIUM_image extension. |
| --use-mobile-user-agent  | 	Set when Chromium should use a mobile user agent. |
| --use-mock-keychain[3]  | 	No description |
| --use-nacl-helper-nonsfi  | 	Use nacl_helper_nonsfi executable (the new, newlib-based version of the Non-SFI runtime) to run Non-SFI nexe, instead of nacl_helper executable (which uses the older, glib-based runtime for Non-SFI mode). TODO(hidehiko): Make this default and then remove this flag after nacl_helper_nonsfi is supported. |
| --use-simple-cache-backend  | 	Uses experimental simple cache backend if possible. |
| --use-spdy  | 	Uses Spdy for the transport protocol instead of HTTP. This is a temporary testing flag. |
| --use-surfaces  | 	Use the new surfaces system to handle compositor delegation. |
| --use-warp  | 	On Windows only: use the WARP software rasterizer in the GPU process. |
| --user-agent  | 	A string used to override the default user agent with a custom one. |
| --user-data-dir  | 	Specifies the user data directory, which is where the browser will look for all of its state. |
| --utility  | 	Causes the process to run as a utility subprocess. |
| --utility-allowed-dir  | 	The utility process is sandboxed, with access to one directory. This flag specifies the directory that can be accessed. |
| --utility-cmd-prefix  | 	On POSIX only: the contents of this flag are prepended to the utility process command line. Useful values might be "valgrind" or "xterm -e gdb --args". |
| --utility-enable-mdns  | 	Allows MDns to access network in sandboxed process. |
| --utility-run-elevated  | 	No description |
| --v  | 	Gives the default maximal active V-logging level; 0 is the default. Normally positive values are used for V-logging levels. |
| --v8-cache-options  | 	Set options to cache V8 data. (off, preparse data, or code) |
| --validate-crx  | 	Examines a .crx for validity and prints the result. |
| --validate-input-event-stream  | 	In debug builds, asserts that the stream of input events is valid. |
| --variations-server-url  | 	Specifies a custom URL for the server which reports variation data to the client. Specifying this switch enables the Variations service on unofficial builds. See variations_service.cc. |
| --version  | 	Prints version information and quits. |
| --video-threads  | 	Set number of threads to use for video decoding. |
| --viewer-launch-via-appid[4]  | 	Requests that Chrome launch the Metro viewer process via the given appid (which is assumed to be registered as default browser) and synchronously connect to it. |
| --vmodule  | 	Gives the per-module maximal V-logging levels to override the value given by --v. E.g. "my_module=2,foo*=3" would change the logging level for all code in source files "my_module.*" and "foo*.*" ("-inl" suffixes are also disregarded for this matching). Any pattern containing a forward or backward slash will be tested against the whole pathname and not just the module. E.g., "*/foo/bar/*=2" would change the logging level for all code in source files under a "foo/bar" directory. |
| --wait-for-debugger  | 	Will wait for 60 seconds for a debugger to come to attach to the process. |
| --wait-for-debugger-children  | 	Will add kWaitForDebugger to every child processes. If a value is passed, it will be used as a filter to determine if the child process should have the kWaitForDebugger flag passed on or not. |
| --wait-for-mutex[4]  | 	Waits for the given handle to be signaled before relaunching metro Chrome on Windows 8 and higher. |
| --wake-on-packets  | 	Enables waking the device based on the receipt of some network packets. |
| --wallet-secure-service-url  | 	Secure service URL for Online Wallet service. Used as the base url to escrow credit card numbers. |
| --wallet-service-url  | 	Service URL for Online Wallet service. Used as the base url for Online Wallet API calls. |
| --wallet-service-use-sandbox  | 	Use the sandbox Online Wallet service URL (for developer testing). |
| --waveout-buffers[4]  | 	Number of buffers to use for WaveOut. |
| --whitelisted-extension-id  | 	Adds the given extension ID to all the permission whitelists. |
| --win-jumplist-action  | 	Specifies which category option was clicked in the Windows Jumplist that resulted in a browser startup. |
| --window-position  | 	Specify the initial window position: --window-position=x,y |
| --window-size  | 	Specify the initial window size: --window-size=w,h |
| --windows8-search[4]  | 	Indicates that chrome was launched to service a search request in Windows 8. |
| --winhttp-proxy-resolver  | 	Uses WinHTTP to fetch and evaluate PAC scripts. Otherwise the default is to use Chromium's network stack to fetch, and V8 to evaluate. |
| --wm-window-animations-disabled  | 	If present animations are disabled. |
| --zygote  | 	Causes the process to run as a renderer zygote. |
