export interface Project {
  name: string;
  lang: string;
  org: string;
  description: string;
  url: string;
  demoUrl?: string;
}

export interface SubProject {
  name: string;
  lang: string;
  description: string;
  url: string;
}

export interface EcosystemGroup {
  name: string;
  description: string;
  projects: SubProject[];
}

export const langColors: Record<string, string> = {
  Rust: "#fb4934",
  TypeScript: "#458588",
  PHP: "#b8bb26",
};

export const featuredProjects: Project[] = [
  {
    name: "Refinery",
    lang: "TypeScript",
    org: "MechanicalLabs",
    description:
    "Configuration-driven CI/CD orchestrator. Builds universal binaries, installers, and libraries across CI platforms (like GitHub Actions) and multiple languages (like Rust).",
    url: "https://github.com/MechanicalLabs/refinery",
  },
  {
    name: "Refractium",
    lang: "Rust",
    org: "SirCesarium",
    description:
    "Near zero-overhead L4 reverse proxy for port multiplexing. Extensible with hooks (L7-like behaviour in L4).",
    url: "https://github.com/SirCesarium/refractium",
  },
  {
    name: "Zipcrawl",
    lang: "Rust",
    org: "SirCesarium",
    description:
    "ZIP inspection tool (CLI/Library) without even extracting files (uses streams) — tree, grep, diff, cat, and pipe without extracting archives.",
    url: "https://github.com/SirCesarium/zipcrawl",
  },
  {
    name: "Inventory API",
    lang: "PHP",
    org: "SirCesarium",
    description:
      "Laravel REST API with role-based access control, authentication, audits, and full CRUD for inventory management with traceability.",
    url: "https://github.com/SirCesarium/inventory-api",
    demoUrl: "https://inventory-api-y8ou.onrender.com/docs/api",
  },
  {
    name: "Tyg (Type-Gen)",
    lang: "Rust",
    org: "SirCesarium",
    description:
      "Multi-language type generator from JSON, YAML, TOML, XML, properties, and URLs. Exports to Rust, TypeScript, Kotlin, and more.",
    url: "https://github.com/SirCesarium/tyg",
  },
  {
    name: "Ripthrow",
    lang: "TypeScript",
    org: "MechanicalLabs",
    description:
      "Opinionated type-safe error handling for TypeScript. Brings Rust's Result and Option types to the TS ecosystem.",
    url: "https://github.com/MechanicalLabs/ripthrow",
  },
];

export const conduitEcosystem: EcosystemGroup = {
  name: "Conduit Ecosystem",
  description:
    "Minecraft package manager, mod inspector, proxy and many API clients — a complete toolchain for Minecraft server management.",
  projects: [
    {
      name: "Conduit CLI",
      lang: "Rust",
      description:
        "Dependency resolver (like NPM / Cargo), and modpack packager for Minecraft servers & clients.",
      url: "https://github.com/SirCesarium/conduit-cli",
    },
    {
      name: "Modcrawl",
      lang: "Rust",
      description:
        "JAR analyzer that detects mod loaders and crawls dependencies at scale.",
      url: "https://github.com/SirCesarium/modcrawl",
    },
    {
      name: "Minecraft Registry API",
      lang: "Rust",
      description:
        "Typed clients for Mojang, Modrinth, NeoForge, Forge, and Paper APIs.",
      url: "https://github.com/SirCesarium/minecraft-registry-api",
    },
    {
      name: "Enderpearl",
      lang: "Rust",
      description:
        "Layer 7 Minecraft proxy with on-demand server lifecycle management & load balancer with health checks.",
      url: "https://github.com/SirCesarium/enderpearl",
    },
  ],
};
