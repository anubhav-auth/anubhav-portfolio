import React from "react";

interface TechIconProps {
  path?: string; // Optional, as default paths are provided
  alt?: string;
}

// Programming Languages
export const Kotlin = ({ path = "https://img.icons8.com/color/32/kotlin.png", alt = "Kotlin Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const Java = ({ path = "https://img.icons8.com/color/32/java-coffee-cup-logo.png", alt = "Java Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const Rust = ({ path = "https://img.icons8.com/color/32/rust-programming-language.png", alt = "Rust Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const JavaScript = ({ path = "https://img.icons8.com/color/32/javascript.png", alt = "JavaScript Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const Python = ({ path = "https://img.icons8.com/color/32/python.png", alt = "Python Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const Cpp = ({ path = "https://img.icons8.com/color/32/c-plus-plus-logo.png", alt = "C++ Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const HTML = ({ path = "https://img.icons8.com/color/32/html-5.png", alt = "HTML Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const CSS = ({ path = "https://img.icons8.com/color/32/css3.png", alt = "CSS Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const Bash = ({ path = "https://img.icons8.com/color/32/bash.png", alt = "Bash Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

// Frameworks and Technologies
export const AndroidStudio = ({ path = "https://img.icons8.com/color/48/android-studio--v3.png", alt = "Android Studio Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const Apollo = ({ path = "https://img.icons8.com/color/32/apollo.png", alt = "Apollo Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const Ktor = ({ path = "", alt = "Ktor Icon" }: TechIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 96 96" id="Ktor-Icon--Streamline-Svg-Logos" height={35} width={35} ><desc>{"Ktor Icon Streamline Icon: https://streamlinehq.com"}</desc><path fill="url(#a)" d="M63.6667 32.3333 48.065 16.7317 32.3333 1l-16.544 16.544L1 32.3333l31.3333 31.3334 31.3334-31.3334Z" /><path fill="url(#b)" d="m32.333 63.6667 15.6017 15.6017L63.6663 95l16.544-16.544 14.7894-14.7893-31.3334-31.3333L32.333 63.6667Z" /><path fill="#000000" d="M63.6663 32.3334H32.333v31.3333h31.3333V32.3334Z" /><defs><linearGradient id="a" x1={1502.8} x2={4678.49} y1={1502.8} y2={4678.49} gradientUnits="userSpaceOnUse"><stop offset={0.296} stopColor="#00afff" /><stop offset={0.694} stopColor="#5282ff" /><stop offset={1} stopColor="#945dff" /></linearGradient><linearGradient id="b" x1={1674.55} x2={4676.98} y1={1674.55} y2={4676.98} gradientUnits="userSpaceOnUse"><stop offset={0.108} stopColor="#c757bc" /><stop offset={0.173} stopColor="#cd5ca9" /><stop offset={0.492} stopColor="#e8744f" /><stop offset={0.716} stopColor="#f88316" /><stop offset={0.823} stopColor="#ff8900" /></linearGradient></defs></svg>
);

export const SpringBoot = ({ path = "https://img.icons8.com/color/32/spring-logo.png", alt = "Spring Boot Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const GraphQL = ({ path = "https://img.icons8.com/color/32/graphql.png", alt = "GraphQL Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const Nginx = ({ path = "https://img.icons8.com/color/32/nginx.png", alt = "NGINX Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const Redis = ({ path = "https://img.icons8.com/color/32/redis.png", alt = "Redis Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const Kafka = ({ path = "https://img.icons8.com/color/32/kafka.png", alt = "Kafka Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

// Databases
export const MySQL = ({ path = "https://img.icons8.com/color/32/mysql-logo.png", alt = "MySQL Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const MongoDB = ({ path = "https://img.icons8.com/color/32/mongodb.png", alt = "MongoDB Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const SQLite = ({ path = "https://img.icons8.com/color/32/sqlite.png", alt = "SQLite Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const Postgres = ({ path = "https://img.icons8.com/color/32/postgreesql.png", alt = "PostgreSQL Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const Firebase = ({ path = "https://img.icons8.com/color/32/firebase.png", alt = "Firebase Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

// Tools and Platforms
export const VSCode = ({ path = "https://img.icons8.com/color/32/visual-studio-code-2019.png", alt = "VS Code Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const IntelliJ = ({ path = "https://img.icons8.com/color/32/intellij-idea.png", alt = "IntelliJ IDEA Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const PyCharm = ({ path = "https://img.icons8.com/color/32/pycharm.png", alt = "PyCharm Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const WebStorm = ({ path = "https://img.icons8.com/color/32/webstorm.png", alt = "WebStorm Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const Docker = ({ path = "https://img.icons8.com/color/32/docker.png", alt = "Docker Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const Figma = ({ path = "https://img.icons8.com/color/32/figma.png", alt = "Figma Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const Git = ({ path = "https://img.icons8.com/color/32/git.png", alt = "Git Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const GitHub = ({ path = "https://img.icons8.com/color/32/github.png", alt = "GitHub Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const Postman = ({ path = "https://img.icons8.com/color/32/postman.png", alt = "Postman Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const Blender = ({ path = "https://img.icons8.com/color/32/blender-3d.png", alt = "Blender Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const Linux = ({ path = "https://img.icons8.com/color/32/linux.png", alt = "Linux Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);


// Python ML Libraries

export const FastAI = ({ path = "https://via.placeholder.com/32?text=fastai", alt = "fastai Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const Matplotlib = ({ path = "https://via.placeholder.com/32?text=matplotlib", alt = "Matplotlib Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const NumPy = ({ path = "https://img.icons8.com/color/32/numpy.png", alt = "NumPy Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const Pandas = ({ path = "https://img.icons8.com/color/32/pandas.png", alt = "Pandas Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const ScikitLearn = ({ path = "https://via.placeholder.com/32?text=sklearn", alt = "Scikit-learn Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);