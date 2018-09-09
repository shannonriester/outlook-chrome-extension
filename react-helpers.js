function invokeMain() {
  try {
    setStartRenderTime();
    readingPaneOn = PageDataPayload.getConversationItems != null ? true : false;
    Program.main({
          'version': '16.2478.1.2588899',
          'serverVersion': besver,
          'startTime': startLoadTime,
          'bootedFromAppcache': appCachedPage,
          'cdnEndpoint': '',
          'mapControlUrl': 'https://www.bing.com/api/maps/mapcontrol',
          'appDomainAppVirtualPath': '/owa',
          'layout': layout,
          'uiCulture': userCultureVar,
          'uiLang': userLanguageVar,
          'osfLang': osfLanguageVar,
          'userCultureRtl': userCultureRtl,
          'uiTheme': clientTheme,
          'osfStringPath': 'prem/16.2478.1.2588899/scripts/ext/##culture##/osfruntime_strings.js',
          'scriptsFolder': 'prem/16.2478.1.2588899/scripts',
          'fallbackScriptsFolder': 'prem/16.2478.1.2588899/scripts',
          'stringsFolder': 'prem/16.2478.1.2588899/scripts',
          'fallbackStringsFolder': 'prem/16.2478.1.2588899/scripts',
          'resourcesFolder': 'prem/16.2478.1.2588899/resources',
          'clientSettings': {
            ActionableMessages: {
              "Name": "ActionableMessages",
              "Enabled": true
            },
            ActionInjectionMessages: {
              "AllowedSenderDomains": ["trello.com", "twitter.com"],
              "Name": "ActionInjectionMessages",
              "Enabled": true
            },
            ActiveSyncSuppressReadReceipt: {
              "Name": "ActiveSyncSuppressReadReceipt",
              "Enabled": true
            },
            AdaptiveCardRendering: {
              "Name": "AdaptiveCardRendering",
              "Enabled": true
            },
            AddCorrelationVector: {
              "Name": "AddCorrelationVector",
              "Enabled": true
            },
            AddinCommands: {
              "Name": "AddinCommands",
              "Enabled": true
            },
            AddinComplianceVerification: {
              "Name": "AddinComplianceVerification",
              "Enabled": true
            },
            AddinsOnSmime: {
              "Name": "AddinsOnSmime",
              "Enabled": true
            },
            AddinsTelemetry: {
              "Name": "AddinsTelemetry",
              "Enabled": true
            },
            AgavePerformance: {
              "Name": "AgavePerformance",
              "Enabled": true
            },
            AllPublicGroupsSearch: {
              "Name": "AllPublicGroupsSearch",
              "Enabled": true
            },
            AppointmentSchedulingGrid: {
              "Name": "AppointmentSchedulingGrid",
              "Enabled": true
            },
            AtAllMentionUX: {
              "Name": "AtAllMentionUX",
              "Enabled": true
            },
            AttachmentsDualAttachEntries: {
              "Name": "AttachmentsDualAttachEntries",
              "Enabled": true
            },
            AttachmentsFilePicker: {
              "Name": "AttachmentsFilePicker",
              "Enabled": true
            },
            AttendeeTypeManagementInMeetingForm: {
              "Name": "AttendeeTypeManagementInMeetingForm",
              "Enabled": true
            },
            BasicEventReservationV1: {
              "Name": "BasicEventReservationV1",
              "Enabled": true
            },
            BasicFlightReservationV1: {
              "Name": "BasicFlightReservationV1",
              "Enabled": true
            },
            BasicFoodEstablishmentReservationV1: {
              "Name": "BasicFoodEstablishmentReservationV1",
              "Enabled": true
            },
            BasicLodgingReservationV1: {
              "Name": "BasicLodgingReservationV1",
              "Enabled": true
            },
            BasicParcelDeliveryV1: {
              "Name": "BasicParcelDeliveryV1",
              "Enabled": true
            },
            BasicRentalCarReservationV1: {
              "Name": "BasicRentalCarReservationV1",
              "Enabled": true
            },
            BookerAnalytics: {
              "LocalyticsAppKey": "e106f205ddbe2c216a7b1c1-e5216ea0-3bb8-11e5-a364-00d0fea82624",
              "Name": "BookerAnalytics",
              "Enabled": true
            },
            BookerModule: {
              "Name": "BookerModule",
              "Enabled": true
            },
            BookingCalendar: {
              "Name": "BookingCalendar",
              "Enabled": true
            },
            BookingCustomerConsent: {
              "Name": "BookingCustomerConsent",
              "Enabled": true
            },
            BookingCustomQuestions: {
              "Name": "BookingCustomQuestions",
              "Enabled": true
            },
            BookingCustomTimeSlotInterval: {
              "Name": "BookingCustomTimeSlotInterval",
              "Enabled": true
            },
            BookingDropDownCustomQuestions: {
              "Name": "BookingDropDownCustomQuestions",
              "Enabled": true
            },
            BookingFeedback: {
              "UserVoiceForumUrl": "https://outlook.uservoice.com/forums/314907",
              "Name": "BookingFeedback",
              "Enabled": true
            },
            BookingInternalNotes: {
              "Name": "BookingInternalNotes",
              "Enabled": true
            },
            BookingMobileAppAvailable: {
              "Name": "BookingMobileAppAvailable",
              "Enabled": true
            },
            BookingMultiDay: {
              "Name": "BookingMultiDay",
              "Enabled": true
            },
            BookingPageFacebookConnect: {
              "ConnectUrl": "https://msbookingsfacebook.outlookapps.com/setup/?selectFbPage=1\u0026bookingmbx={0}\u0026culture={1}",
              "Name": "BookingPageFacebookConnect",
              "Enabled": true
            },
            BookingPageRegionSettings: {
              "Name": "BookingPageRegionSettings",
              "Enabled": true
            },
            BookingPageShareViaFacebook: {
              "Name": "BookingPageShareViaFacebook",
              "Enabled": true
            },
            BookingPageShareViaTwitter: {
              "Name": "BookingPageShareViaTwitter",
              "Enabled": true
            },
            BookingPersonalCalendars: {
              "Name": "BookingPersonalCalendars",
              "Enabled": true
            },
            BookingsAria: {
              "AriaTenant": "a00b647042434dd5b2e388c598b83298-129ed47c-4413-4a6c-aa5c-f306462573c2-7337",
              "Name": "BookingsAria",
              "Enabled": true
            },
            BookingSelfService: {
              "DemoPageUrl": "https://aka.ms/bookingsdemo",
              "Name": "BookingSelfService",
              "Enabled": true
            },
            BookingsHomePageStatistics: {
              "Name": "BookingsHomePageStatistics",
              "Enabled": true
            },
            BootExperienceBoost: {
              "Name": "BootExperienceBoost",
              "Enabled": true
            },
            BootNetworkTrace: {
              "Name": "BootNetworkTrace",
              "Enabled": true
            },
            CalendarAgendaReminder: {
              "Name": "CalendarAgendaReminder",
              "Enabled": true
            },
            CalendarComposeSkypeExperiment: {
              "Name": "CalendarComposeSkypeExperiment",
              "Enabled": true
            },
            CalendarFeeds: {
              "Name": "CalendarFeeds",
              "Enabled": true
            },
            CalendarTimeSuggestionsInSchedulingAssistant: {
              "Name": "CalendarTimeSuggestionsInSchedulingAssistant",
              "Enabled": true
            },
            ClassicAttachmentsProgressBar: {
              "Name": "ClassicAttachmentsProgressBar",
              "Enabled": true
            },
            ClearCalendarOOF: {
              "Name": "ClearCalendarOOF",
              "Enabled": true
            },
            ClutterUserVoiceSurvey: {
              "Name": "ClutterUserVoiceSurvey",
              "Enabled": true
            },
            CollegeBasketballPromotion: {
              "Name": "CollegeBasketballPromotion",
              "Enabled": true
            },
            ConferenceRoomInQuickCompose: {
              "Name": "ConferenceRoomInQuickCompose",
              "Enabled": true
            },
            ConnectorActionCardsV1: {
              "Name": "ConnectorActionCardsV1",
              "Enabled": true
            },
            ConnectorHoverExperienceOnHomePageWithoutAddButton: {
              "Name": "ConnectorHoverExperienceOnHomePageWithoutAddButton",
              "Enabled": true
            },
            ConsumerJunkEmailRuleSettings: {
              "DefaultMaxNumberOfTrustedEntries": 1024,
              "DefaultMaxNumberOfBlockedEntries": 1024,
              "Name": "ConsumerJunkEmailRuleSettings",
              "Enabled": true
            },
            ContextualApps: {
              "Name": "ContextualApps",
              "Enabled": true
            },
            CopyLinkToConversation: {
              "Name": "CopyLinkToConversation",
              "Enabled": true
            },
            CreateBookingMailbox: {
              "Name": "CreateBookingMailbox",
              "Enabled": true
            },
            DownloadAuthenticatorFactory: {
              "Name": "DownloadAuthenticatorFactory",
              "Enabled": true
            },
            EmailReminders: {
              "Name": "EmailReminders",
              "Enabled": true
            },
            EmailRemindersRefresh: {
              "Name": "EmailRemindersRefresh",
              "Enabled": true
            },
            EnableEnterpriseFBL: {
              "Name": "EnableEnterpriseFBL",
              "Enabled": true
            },
            EnableFBL: {
              "Name": "EnableFBL",
              "Enabled": true
            },
            EnhancedPeopleHub: {
              "Name": "EnhancedPeopleHub",
              "Enabled": true
            },
            EnsurePrimaryAddressForExplicitLogon: {
              "Name": "EnsurePrimaryAddressForExplicitLogon",
              "Enabled": true
            },
            EntitySharing: {
              "Name": "EntitySharing",
              "Enabled": true
            },
            EwsGroupsInOwa: {
              "Name": "EwsGroupsInOwa",
              "Enabled": true
            },
            ExtDetectedEntity: {
              "Name": "ExtDetectedEntity",
              "Enabled": true
            },
            ExtPinnableTaskPane: {
              "Name": "ExtPinnableTaskPane",
              "Enabled": true
            },
            ExtReactTaskPane: {
              "Name": "ExtReactTaskPane",
              "Enabled": true
            },
            ExtSSO: {
              "Name": "ExtSSO",
              "Enabled": true
            },
            ExtTrackCalendarUsage: {
              "Name": "ExtTrackCalendarUsage",
              "Enabled": true
            },
            ExtTrackUsage: {
              "Name": "ExtTrackUsage",
              "Enabled": true
            },
            Filmstrip: {
              "Name": "Filmstrip",
              "Enabled": true
            },
            FindPeopleEntityFeedback: {
              "Name": "FindPeopleEntityFeedback",
              "Enabled": true
            },
            FindUnifiedGroupsEWS: {
              "Name": "FindUnifiedGroupsEWS",
              "Enabled": true
            },
            FolderBasedClutter: {
              "Name": "FolderBasedClutter",
              "Enabled": true
            },
            GroupHeaderSites: {
              "Name": "GroupHeaderSites",
              "Enabled": true
            },
            GroupHeaderV3: {
              "Name": "GroupHeaderV3",
              "Enabled": true
            },
            GroupsDiscoveryInOwa: {
              "Name": "GroupsDiscoveryInOwa",
              "Enabled": true
            },
            GroupsOobe: {
              "Name": "GroupsOobe",
              "Enabled": true
            },
            GroupsRegionalConfiguration: {
              "Name": "GroupsRegionalConfiguration",
              "Enabled": true
            },
            GroupSyncDeliveryDisabled: {
              "Name": "GroupSyncDeliveryDisabled",
              "Enabled": true
            },
            HammerJS: {
              "Name": "HammerJS",
              "Enabled": true
            },
            InClientLinkFromEmailClick: {
              "Name": "InClientLinkFromEmailClick",
              "Enabled": true
            },
            InfoTipsSettings: {
              "MinimumConfidenceScore": 200,
              "Name": "InfoTipsSettings"
            },
            InlinePreview: {
              "Name": "InlinePreview",
              "Enabled": true
            },
            InstantSurfaceFiltering: {
              "Name": "InstantSurfaceFiltering",
              "Enabled": true
            },
            InterestingCalendarsCalendarModulePromotion: {
              "Name": "InterestingCalendarsCalendarModulePromotion",
              "Enabled": true
            },
            InvitationManagerErrorFiltering: {
              "Name": "InvitationManagerErrorFiltering",
              "Enabled": true
            },
            IsConnectorsIFramed: {
              "Name": "IsConnectorsIFramed",
              "Enabled": true
            },
            ItemAttachment: {
              "Name": "ItemAttachment",
              "Enabled": true
            },
            JoinedGroupsSearch: {
              "Name": "JoinedGroupsSearch",
              "Enabled": true
            },
            LightBoxV3: {
              "Name": "LightBoxV3",
              "Enabled": true
            },
            Like: {
              "Name": "Like",
              "Enabled": true
            },
            LivePeopleCards: {
              "Name": "LivePeopleCards",
              "Enabled": true
            },
            LivePeopleCardsBootstrapperAriaTelemetry: {
              "Name": "LivePeopleCardsBootstrapperAriaTelemetry",
              "Enabled": true
            },
            LivePeopleCardsForGroups: {
              "Name": "LivePeopleCardsForGroups",
              "Enabled": true
            },
            LivePeopleCardsImmersiveProfile: {
              "Name": "LivePeopleCardsImmersiveProfile",
              "Enabled": true
            },
            LivePeopleCardsResourceCatalog: {
              "Name": "LivePeopleCardsResourceCatalog",
              "Enabled": true
            },
            LocationSuggestionsInQuickCompose: {
              "Name": "LocationSuggestionsInQuickCompose",
              "Enabled": true
            },
            LocationWellDesignV2: {
              "Name": "LocationWellDesignV2",
              "Enabled": true
            },
            LokiSettings: {
              "IsNonMicrosoftUser": true,
              "Name": "LokiSettings",
              "Enabled": true
            },
            MaxConnectedAccounts: {
              "MaxAllowedConnectedAccounts": 20,
              "Name": "MaxConnectedAccounts",
              "Enabled": true
            },
            MCAvailableTime: {
              "Name": "MCAvailableTime",
              "Enabled": true
            },
            MCAvailableTimeRP: {
              "Name": "MCAvailableTimeRP",
              "Enabled": true
            },
            MCImage: {
              "Name": "MCImage",
              "Enabled": true
            },
            MCInlineImageInSxS: {
              "Name": "MCInlineImageInSxS",
              "Enabled": true
            },
            MCInlineImageSettings: {
              "CrossOrigin": "use-credentials",
              "Name": "MCInlineImageSettings"
            },
            MCMotionThumbnails: {
              "Name": "MCMotionThumbnails",
              "Enabled": true
            },
            MCMoveImageAttachment: {
              "Name": "MCMoveImageAttachment",
              "Enabled": true
            },
            MCUserHighlighting: {
              "Name": "MCUserHighlighting",
              "Enabled": true
            },
            MeetingCollabAttachmentsFromEventConversation: {
              "Name": "MeetingCollabAttachmentsFromEventConversation",
              "Enabled": true
            },
            MeetingCollabAttachmentsInPeek: {
              "Name": "MeetingCollabAttachmentsInPeek",
              "Enabled": true
            },
            MeetingCollabShowAttachmentsFromEventConversation: {
              "Name": "MeetingCollabShowAttachmentsFromEventConversation",
              "Enabled": true
            },
            MeLike: {
              "Name": "MeLike",
              "Enabled": true
            },
            MentionsUX: {
              "Name": "MentionsUX",
              "Enabled": true
            },
            MessageSafetyReporting: {
              "Name": "MessageSafetyReporting",
              "Enabled": true
            },
            ModernAttachments: {
              "Name": "ModernAttachments",
              "Enabled": true
            },
            ModernGrou…
