export const botConfig = {
  // ============================================================
  // 01. BOT PRESENCE
  // ============================================================
  presence: {
    status: "online",

    activities: [
      {
        name: "ER:LC",
        state: "Oklahoma Roleplay",
        type: 4,
      },
      {
        name: "Oklahoma Roleplay",
        type: 0,
      },
    ],

    rotateActivities: true,
    rotationInterval: 15000,
  },

  // ============================================================
  // 02. BOT COMMAND SYSTEM
  // ============================================================
  commands: {
    prefix: "!",
    slashCommands: true,
    prefixCommands: true,

    defaultCooldown: 3,

    owners:
      process.env.OWNER_IDS
        ?.split(",")
        .map((id) => id.trim())
        .filter(Boolean) || [],

    maintenanceMode:
      process.env.MAINTENANCE_MODE === "true",

    deleteCommands: false,

    dmCommands: false,

    allowUnknownCommands: false,

    commandLogging: true,

    categories: [
      "Administration",
      "Moderation",
      "Sessions",
      "Wars",
      "ERLC",
      "Staff",
      "Tickets",
      "Announcements",
      "Utility",
      "Logging",
      "Server",
      "Management",
    ],
  },

  // ============================================================
  // 03. ER:LC API
  // ============================================================
  erlc: {
    enabled: true,

    apiKey: process.env.ERLC_API_KEY,

    serverId: process.env.ERLC_SERVER_ID,

    serverCode: process.env.ERLC_SERVER_CODE,

    serverName: "Oklahoma Roleplay",

    game: "Emergency Response: Liberty County",

    platform: "Roblox",

    maxPlayers: 40,

    statusInterval: 30000,

    reconnectAttempts: 5,

    reconnectDelay: 5000,

    commands: {
      status: true,
      players: true,
      queue: true,

      kick: true,
      ban: true,
      unban: true,

      mod: true,
      unmod: true,

      heal: true,
      kill: true,

      message: true,
      hint: true,
      announce: true,

      shutdown: true,

      team: true,

      vehicle: true,
    },

    permissions: {
      status: "everyone",
      players: "everyone",

      kick: "staff",
      ban: "management",
      unban: "management",

      mod: "staff",
      unmod: "staff",

      heal: "staff",
      kill: "staff",

      message: "staff",
      hint: "staff",
      announce: "management",

      shutdown: "owner",
      team: "staff",
      vehicle: "staff",
    },
  },

  // ============================================================
  // 04. SESSION SYSTEM
  // ============================================================
  sessions: {
    enabled: true,

    channelId: process.env.SESSION_CHANNEL_ID,

    logChannelId: process.env.SESSION_LOG_CHANNEL_ID,

    hostRoleId: process.env.SESSION_HOST_ROLE_ID,

    managementRoleId: process.env.MANAGEMENT_ROLE_ID,

    minimumPlayers: 5,

    recommendedPlayers: 10,

    maximumSessions: 1,

    cooldown: 30,

    automaticStatus: true,

    automaticPlayerCount: true,

    commands: {
      start: true,
      end: true,
      cancel: true,
      pause: true,
      resume: true,
      status: true,
      host: true,
      unhost: true,
      rename: true,
      players: true,
      lock: true,
      unlock: true,
    },

    startMessage: {
      enabled: true,

      title: "🚨 SESSION STARTED",

      description:
        "An official Oklahoma Roleplay session has started!\n\n" +
        "Join the ER:LC server and follow all server rules.",

      mention: "@everyone",

      showServerCode: true,

      showPlayerCount: true,

      showHost: true,
    },

    endMessage: {
      enabled: true,

      title: "🛑 SESSION ENDED",

      description:
        "The Oklahoma Roleplay session has officially ended.",

      showStatistics: true,

      showHost: true,

      showDuration: true,
    },

    statistics: {
      enabled: true,

      playersJoined: true,

      playersLeft: true,

      peakPlayers: true,

      duration: true,

      host: true,
    },
  },

  // ============================================================
  // 05. WAR SYSTEM
  // ============================================================
  war: {
    enabled: true,

    categoryId: process.env.WAR_CATEGORY_ID,

    logChannelId: process.env.WAR_LOG_CHANNEL_ID,

    recordChannelId: process.env.WAR_RECORD_CHANNEL_ID,

    hostRoleId: process.env.WAR_HOST_ROLE_ID,

    managementRoleId: process.env.WAR_MANAGEMENT_ROLE_ID,

    commands: {
      start: true,
      end: true,
      cancel: true,
      status: true,

      record: true,
      records: true,

      leaderboard: true,

      wins: true,
      losses: true,
      draws: true,

      mvp: true,
      participants: true,

      team: true,
      teams: true,

      add: true,
      remove: true,
    },

    requirements: {
      minimumPlayers: 5,

      minimumTeams: 2,

      hostRequired: true,

      managementApproval: true,
    },

    records: {
      enabled: true,

      totalWars: true,

      wins: true,

      losses: true,

      draws: true,

      winRate: true,

      mvps: true,

      participants: true,

      streaks: true,
    },

    results: {
      win: "WIN",
      loss: "LOSS",
      draw: "DRAW",
      cancelled: "CANCELLED",
    },
  },

  // ============================================================
  // 06. MODERATION
  // ============================================================
  moderation: {
    enabled: true,

    staffRoleId: process.env.STAFF_ROLE_ID,

    seniorStaffRoleId: process.env.SENIOR_STAFF_ROLE_ID,

    managementRoleId: process.env.MANAGEMENT_ROLE_ID,

    logChannelId: process.env.MOD_LOG_CHANNEL_ID,

    commands: {
      warn: true,
      warnings: true,
      unwarn: true,

      timeout: true,
      untimeout: true,

      kick: true,

      ban: true,
      unban: true,

      softban: true,

      purge: true,

      lock: true,
      unlock: true,

      slowmode: true,

      nick: true,

      resetnick: true,

      mute: true,
      unmute: true,

      history: true,

      case: true,
      cases: true,
    },

    punishments: {
      warn: true,
      timeout: true,
      kick: true,
      ban: true,
      softban: true,
    },

    timeoutDurations: {
      short: 60,
      medium: 600,
      long: 3600,
      day: 86400,
      week: 604800,
    },

    automaticLogging: true,

    dmUsers: true,

    deleteCommandMessages: false,

    requireReason: true,

    requireProofForBan: true,
  },

  // ============================================================
  // 07. WARNING SYSTEM
  // ============================================================
  warnings: {
    enabled: true,

    database: true,

    maximumWarnings: 5,

    automaticPunishments: true,

    punishments: {
      1: "warn",
      2: "warn",
      3: "timeout",
      4: "kick",
      5: "ban",
    },

    commands: {
      warn: true,
      warnings: true,
      clear: true,
      remove: true,
      history: true,
    },

    expiration: {
      enabled: true,

      days: 30,
    },
  },

  // ============================================================
  // 08. STAFF MANAGEMENT
  // ============================================================
  staff: {
    enabled: true,

    managementRoleId: process.env.MANAGEMENT_ROLE_ID,

    highCommandRoleId: process.env.HIGH_COMMAND_ROLE_ID,

    staffManagerRoleId: process.env.STAFF_MANAGER_ROLE_ID,

    commands: {
      stafflist: true,

      promote: true,

      demote: true,

      infraction: true,

      infractions: true,

      removeinfraction: true,

      activity: true,

      activitycheck: true,

      loa: true,

      unloa: true,

      notes: true,

      notesview: true,

      notesremove: true,
    },

    channels: {
      promotions: process.env.PROMOTION_CHANNEL_ID,

      demotions: process.env.DEMOTION_CHANNEL_ID,

      infractions: process.env.INFRACTION_CHANNEL_ID,

      activity: process.env.ACTIVITY_CHANNEL_ID,

      staffLogs: process.env.STAFF_LOG_CHANNEL_ID,
    },

    activity: {
      enabled: true,

      minimumHours: 2,

      checkInterval: 604800,

      warningsEnabled: true,

      automaticWarnings: true,
    },
  },

  // ============================================================
  // 09. TICKETS
  // ============================================================
  tickets: {
    enabled: true,

    categoryId: process.env.TICKET_CATEGORY_ID,

    staffRoleId: process.env.TICKET_STAFF_ROLE_ID,

    transcriptChannelId:
      process.env.TICKET_TRANSCRIPT_CHANNEL_ID,

    logChannelId:
      process.env.TICKET_LOG_CHANNEL_ID,

    maximumPerUser: 1,

    commands: {
      ticket: true,
      close: true,
      reopen: true,
      add: true,
      remove: true,
      rename: true,
      claim: true,
      unclaim: true,
      transcript: true,
    },

    types: {
      general: {
        enabled: true,
        name: "General Support",
        emoji: "🎫",
      },

      moderation: {
        enabled: true,
        name: "Moderation",
        emoji: "🛡️",
      },

      playerReport: {
        enabled: true,
        name: "Player Report",
        emoji: "🚨",
      },

      erlc: {
        enabled: true,
        name: "ER:LC Support",
        emoji: "🚔",
      },

      staff: {
        enabled: true,
        name: "Staff Support",
        emoji: "👮",
      },

      partnership: {
        enabled: true,
        name: "Partnership",
        emoji: "🤝",
      },
    },

    transcripts: {
      enabled: true,

      includeMessages: true,

      includeAttachments: true,

      includeUserInfo: true,

      includeTimestamps: true,
    },
  },

  // ============================================================
  // 10. ANNOUNCEMENTS
  // ============================================================
  announcements: {
    enabled: true,

    channelId: process.env.ANNOUNCEMENT_CHANNEL_ID,

    managementRoleId: process.env.MANAGEMENT_ROLE_ID,

    commands: {
      announce: true,
      embed: true,
      update: true,
      session: true,
      war: true,
      shutdown: true,
      restart: true,
    },

    permissions: {
      announce: "management",
      embed: "management",
      update: "management",
      session: "staff",
      war: "management",
      shutdown: "owner",
      restart: "owner",
    },

    allowEveryone: true,

    allowHere: true,

    scheduled: true,

    maxScheduled: 25,
  },

  // ============================================================
  // 11. AUTO MODERATION
  // ============================================================
  automod: {
    enabled: true,

    spam: {
      enabled: true,

      maxMessages: 6,

      interval: 5000,

      punishment: "timeout",

      duration: 600,
    },

    duplicateMessages: {
      enabled: true,

      maximumDuplicates: 3,
    },

    mentionSpam: {
      enabled: true,

      maximumMentions: 5,
    },

    inviteLinks: {
      enabled: true,

      delete: true,

      warn: true,
    },

    badWords: {
      enabled: true,

      delete: true,

      warn: true,
    },

    caps: {
      enabled: true,

      minimumLength: 10,

      maximumPercentage: 80,
    },
  },

  // ============================================================
  // 12. LOGGING
  // ============================================================
  logging: {
    enabled: true,

    channels: {
      moderation: process.env.MOD_LOG_CHANNEL_ID,

      commands: process.env.COMMAND_LOG_CHANNEL_ID,

      sessions: process.env.SESSION_LOG_CHANNEL_ID,

      wars: process.env.WAR_LOG_CHANNEL_ID,

      erlc: process.env.ERLC_LOG_CHANNEL_ID,

      tickets: process.env.TICKET_LOG_CHANNEL_ID,

      staff: process.env.STAFF_LOG_CHANNEL_ID,

      members: process.env.MEMBER_LOG_CHANNEL_ID,

      messages: process.env.MESSAGE_LOG_CHANNEL_ID,

      voice: process.env.VOICE_LOG_CHANNEL_ID,

      roles: process.env.ROLE_LOG_CHANNEL_ID,

      channels: process.env.CHANNEL_LOG_CHANNEL_ID,

      errors: process.env.ERROR_LOG_CHANNEL_ID,
    },

    events: {
      memberJoin: true,
      memberLeave: true,

      messageDelete: true,
      messageEdit: true,

      roleCreate: true,
      roleDelete: true,
      roleUpdate: true,

      channelCreate: true,
      channelDelete: true,
      channelUpdate: true,

      voiceJoin: true,
      voiceLeave: true,
      voiceMove: true,

      commandUse: true,

      moderation: true,

      sessions: true,

      wars: true,
    },
  },

  // ============================================================
  // 13. SERVER MANAGEMENT
  // ============================================================
  server: {
    name: "Oklahoma Roleplay",

    game: "Emergency Response: Liberty County",

    platform: "Roblox",

    timezone: "America/New_York",

    commands: {
      serverinfo: true,
      serverstatus: true,
      rules: true,
      channels: true,
      roles: true,
      membercount: true,
      staffcount: true,
      servericon: true,
      serverbanner: true,
    },

    links: {
      discord:
        process.env.DISCORD_INVITE_URL,

      roblox:
        process.env.ROBLOX_GROUP_URL,

      game:
        "https://www.roblox.com/games/2534724415",
    },
  },

  // ============================================================
  // 14. UTILITY
  // ============================================================
  utility: {
    enabled: true,

    commands: {
      help: true,
      ping: true,
      uptime: true,

      botinfo: true,

      userinfo: true,

      avatar: true,

      banner: true,

      roleinfo: true,

      channelinfo: true,

      serverinfo: true,

      membercount: true,

      serverstatus: true,

      timestamp: true,

      calculator: true,

      poll: true,

      remind: true,
    },
  },

  // ============================================================
  // 15. EMBEDS
  // ============================================================
  embeds: {
    footer: "Oklahoma Roleplay • ER:LC",

    timestamps: true,

    colors: {
      primary: "#5865F2",

      success: "#57F287",

      warning: "#FEE75C",

      danger: "#ED4245",

      error: "#ED4245",

      neutral: "#2B2D31",

      session: "#57F287",

      war: "#ED4245",

      erlc: "#5865F2",
    },
  },

  // ============================================================
  // 16. DATABASE
  // ============================================================
  database: {
    enabled: true,

    url: process.env.DATABASE_URL,

    tables: {
      users: true,

      warnings: true,

      cases: true,

      sessions: true,

      wars: true,

      staff: true,

      tickets: true,

      activity: true,

      playerRecords: true,
    },

    backups: {
      enabled: true,

      interval: 86400,

      keep: 7,
    },
  },

  // ============================================================
  // 17. PERMISSIONS
  // ============================================================
  permissions: {
    owner: [
      "all",
    ],

    management: [
      "moderation",
      "sessions",
      "wars",
      "staff",
      "tickets",
      "announcements",
      "erlc",
    ],

    administrator: [
      "moderation",
      "sessions",
      "tickets",
      "erlc",
    ],

    moderator: [
      "warn",
      "timeout",
      "kick",
      "purge",
      "tickets",
      "reports",
    ],

    sessionHost: [
      "session.start",
      "session.end",
      "session.status",
      "erlc.status",
      "erlc.players",
    ],

    warHost: [
      "war.start",
      "war.end",
      "war.status",
      "war.record",
    ],

    member: [
      "help",
      "ping",
      "serverinfo",
      "session.status",
      "erlc.status",
      "ticket",
    ],
  },

  // ============================================================
  // 18. COOLDOWNS
  // ============================================================
  cooldowns: {
    global: 3,

    sessionStart: 30,

    sessionEnd: 10,

    warStart: 60,

    warEnd: 10,

    announce: 10,

    ticket: 30,

    report: 30,

    moderation: 3,

    erlcStatus: 5,

    erlcPlayers: 5,
  },

  // ============================================================
  // 19. ERROR HANDLING
  // ============================================================
  errors: {
    enabled: true,

    sendUserMessage: true,

    message:
      "❌ An error occurred while processing your request.",

    logErrors: true,

    channelId:
      process.env.ERROR_LOG_CHANNEL_ID,

    includeStackTrace: false,

    restartOnCrash: false,

    retryFailedRequests: true,

    maximumRetries: 3,
  },

  // ============================================================
  // 20. DEVELOPMENT
  // ============================================================
  development: {
    debug:
      process.env.DEBUG === "true",

    developmentMode:
      process.env.NODE_ENV === "development",

    verboseLogging: false,

    showCommandErrors: true,

    testGuildId:
      process.env.TEST_GUILD_ID,

    developerCommands: false,
  },
};
