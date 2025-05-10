import React from "react";

interface TechIconProps {
  path?: string; // Optional, as default paths are provided
  alt?: string;
}

// Programming Languages
export const Kotlin = ({ path = "https://img.icons8.com/color/32/kotlin.png", alt = "Kotlin Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const Jetpack_compose = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 128 128"><g fill="none"><path fill="#083042" d="M41.226 76.778a4 4 0 0 1-.47-1.29c.09.452.25.887.47 1.29m.578.713c.222.22.472.411.749.548l18.88 10.565l-18.88-10.565a2.9 2.9 0 0 1-.747-.548z"/><path fill="#083042" d="M64.342 101.967h-.14a8.3 8.3 0 0 1-4.014-1.016l-28.182-15.75c-1.663-.932-2.686-2.66-2.686-4.527V48.628c0-1.373.249-2.69.83-3.842L8.114 32.522c-.913 1.92-1.383 4.088-1.356 6.366v52.927a8.68 8.68 0 0 0 4.458 7.49l46.481 26.012c2.05 1.152 4.347 1.701 6.617 1.701v-.027c.055-3.32.028-16.628.028-25.023z"/><path fill="#3ddb85" d="m86.46 50.6l-.167-.246c-.138-.192-.275-.357-.413-.548c.138.164.275.356.413.547a1 1 0 0 1 .167.247M63.262 37.76c.14 0 .251-.027.39-.027c-.139.027-.278.027-.39.027"/><path fill="#3ddc84" d="M30.122 44.757a7.2 7.2 0 0 1 2.825-3.072l26.52-15.503a8.07 8.07 0 0 1 8.03-.082l26.798 15.009a9 9 0 0 1 3.018 2.743L118.99 31.04a14.9 14.9 0 0 0-4.955-4.5L69.766 1.764a13.32 13.32 0 0 0-13.233.137L12.765 27.472a11.7 11.7 0 0 0-4.651 5.049l22.009 12.236z"/><path fill="#3ddb85" d="M62.157 37.983c.057-.028.114-.028.17-.056c-.056.028-.113.028-.17.056m-20.88 12.949c.056-.11.111-.22.168-.3c-.057.109-.111.19-.168.3l-.082.246z"/><path fill="#4285f4" d="M118.962 31.04L97.285 43.852c.83 1.207 1.329 2.633 1.355 4.089v30.51a7.88 7.88 0 0 1-3.93 6.914L68.188 100.87a8.1 8.1 0 0 1-3.849 1.097c.029 8.369.029 21.677-.027 24.997v.027a13.53 13.53 0 0 0 6.617-1.812l43.769-25.599c4.07-2.387 6.562-6.723 6.506-11.415V37.817c-.028-2.442-.858-4.774-2.242-6.777"/><path fill="#4285f4" d="M86.963 75.187c-.028.056-.028.111-.056.168a.4.4 0 0 0 .056-.168m-.278-24.227c-.057-.138-.14-.248-.223-.385c.083.137.166.275.222.385zM66.807 88.576L84.58 78.178c.111-.054.195-.138.306-.192c-.111.054-.195.138-.306.192l-17.773 10.4zM86.74 75.818c-.056.138-.139.275-.196.413c.057-.165.112-.303.196-.413"/><path fill="#d6f0ff" d="M41.198 51.178a5.5 5.5 0 0 0-.415 1.675c-.028.218-.028.438-.028.686v21.483c0 .164 0 .302.028.467c.056.465.222.905.47 1.29c.167.274.36.492.555.712c.222.22.47.411.746.55l18.882 10.563a5.5 5.5 0 0 0 2.684.685h.195a5.16 5.16 0 0 0 2.492-.74L84.58 78.15c.111-.055.194-.138.305-.192c.194-.137.388-.275.554-.44q.391-.354.719-.768c.138-.192.277-.383.388-.576c.082-.136.139-.274.193-.412c.056-.135.14-.301.195-.465c.027-.056.027-.111.055-.165a5.4 5.4 0 0 0 .249-1.647V53.044c0-.383-.056-.74-.138-1.096c-.055-.248-.14-.468-.222-.688l-.166-.328c-.055-.138-.14-.247-.222-.385l-.166-.246c-.138-.193-.277-.357-.415-.549a5.6 5.6 0 0 0-1.606-1.29L66.337 38.394a6 6 0 0 0-.97-.44a6 6 0 0 0-1.385-.246h-.36c-.137 0-.248 0-.386.026a5.7 5.7 0 0 0-.942.165c-.055.027-.11.027-.166.056c-.415.11-.803.301-1.191.52l-17.773 10.4a4.6 4.6 0 0 0-1.33 1.18c-.137.192-.276.384-.387.576c-.055.11-.11.192-.166.302l-.083.246Z"/><path fill="#083042" d="M64.312 89.288h-.194a5.5 5.5 0 0 1-2.686-.684L42.552 78.04a3.7 3.7 0 0 1-.748-.549a3.3 3.3 0 0 1-.554-.714a4 4 0 0 1-.47-1.29c-.029-.163-.029-.301-.029-.465V53.537c0-.219 0-.465.029-.686c.053-.575.192-1.14.415-1.674L36.1 48.078l-5.98-3.32c-.554 1.152-.83 2.468-.83 3.841v32.047a5.32 5.32 0 0 0 2.685 4.528l28.157 15.776a8 8 0 0 0 4.014 1.016h.14c0-4.089-.029-6.997-.029-6.997l.055-5.68z"/><path fill="#041619" d="M64.312 89.288h-.194a5.5 5.5 0 0 1-2.686-.684L42.552 78.04a3.7 3.7 0 0 1-.748-.549a3.3 3.3 0 0 1-.554-.714a4 4 0 0 1-.47-1.29c-.029-.163-.029-.301-.029-.465V53.537c0-.219 0-.465.029-.686c.053-.575.192-1.14.415-1.674L36.1 48.078l-5.98-3.32c-.554 1.152-.83 2.468-.83 3.841v32.047a5.32 5.32 0 0 0 2.685 4.528l28.157 15.776a8 8 0 0 0 4.014 1.016h.14c0-4.089-.029-6.997-.029-6.997l.055-5.68z"/><path fill="#3ddb85" d="m94.266 41.109l-26.799-15.01a8.07 8.07 0 0 0-8.029.083l-26.52 15.504a7.05 7.05 0 0 0-2.826 3.073l6.01 3.32l5.093 3.099l.082-.246c.056-.111.111-.22.166-.302c.111-.192.25-.384.388-.576c.36-.467.803-.85 1.33-1.18l17.772-10.4q.57-.32 1.191-.52c.056-.027.111-.027.166-.056q.463-.126.941-.164c.138 0 .249-.028.388-.028h.36c.469.03.933.111 1.384.246q.512.162.969.441l17.966 10.07a6 6 0 0 1 1.608 1.289c.137.164.277.357.414.548l.167.246l4.595-3.044l6.229-3.704c-.803-1.071-1.827-2.032-3.045-2.69z"/><path fill="#37bf6e" d="m94.266 41.109l-26.799-15.01a8.07 8.07 0 0 0-8.029.083l-26.52 15.504a7.05 7.05 0 0 0-2.826 3.073l6.01 3.32l5.093 3.099l.082-.246c.056-.111.111-.22.166-.302c.111-.192.25-.384.388-.576c.36-.467.803-.85 1.33-1.18l17.772-10.4q.57-.32 1.191-.52c.056-.027.111-.027.166-.056q.463-.126.941-.164c.138 0 .249-.028.388-.028h.36c.469.03.933.111 1.384.246q.512.162.969.441l17.966 10.07a6 6 0 0 1 1.608 1.289c.137.164.277.357.414.548l.167.246l4.595-3.044l6.229-3.704c-.803-1.071-1.827-2.032-3.045-2.69z"/><path fill="#4285f4" d="M86.46 50.602c.083.136.139.246.221.384l.167.329a4.8 4.8 0 0 1 .36 1.783V73.54a5.4 5.4 0 0 1-.25 1.646c-.027.054-.027.11-.055.164a3.4 3.4 0 0 1-.193.468c-.057.135-.14.273-.195.41c-.11.193-.249.384-.388.577a6 6 0 0 1-.719.767c-.166.165-.36.302-.554.44c-.111.054-.193.137-.304.192L66.776 88.602a5.84 5.84 0 0 1-2.492.742v5.679s0 2.909.028 6.997a7.8 7.8 0 0 0 3.849-1.097l26.52-15.504c2.465-1.453 3.96-4.088 3.932-6.913V47.995c-.027-1.482-.525-2.882-1.355-4.089l-6.231 3.705z"/><path fill="#3870b2" d="M86.46 50.602c.083.136.139.246.221.384l.167.329a4.8 4.8 0 0 1 .36 1.783V73.54a5.4 5.4 0 0 1-.25 1.646c-.027.054-.027.11-.055.164a3.4 3.4 0 0 1-.193.468c-.057.135-.14.273-.195.41c-.11.193-.249.384-.388.577a6 6 0 0 1-.719.767c-.166.165-.36.302-.554.44c-.111.054-.193.137-.304.192L66.776 88.602a5.84 5.84 0 0 1-2.492.742v5.679s0 2.909.028 6.997a7.8 7.8 0 0 0 3.849-1.097l26.52-15.504c2.465-1.453 3.96-4.088 3.932-6.913V47.995c-.027-1.482-.525-2.882-1.355-4.089l-6.231 3.705z"/><path fill="#d6f0ff" d="M62.155 37.982c-.416.11-.804.302-1.19.52l-17.774 10.4l17.772-10.398a4.5 4.5 0 0 1 1.19-.52z"/><path fill="#000" d="M62.155 37.982c-.416.11-.804.302-1.19.52l-17.774 10.4l17.772-10.398a4.5 4.5 0 0 1 1.19-.52z" opacity=".1"/><path fill="#d6f0ff" d="M85.88 49.806a5.6 5.6 0 0 0-1.605-1.29l-17.968-10.07l17.967 10.07a5.6 5.6 0 0 1 1.606 1.29"/><path fill="#000" d="M85.88 49.806a5.6 5.6 0 0 0-1.605-1.29l-17.968-10.07l17.967 10.07a5.6 5.6 0 0 1 1.606 1.29" opacity=".1"/><path fill="#d6f0ff" d="M86.848 51.289a7 7 0 0 1 .22.684c-.055-.219-.14-.438-.222-.684z"/><path fill="#000" d="M86.848 51.289a7 7 0 0 1 .22.684c-.055-.219-.14-.438-.222-.684z" opacity=".1"/><path fill="#d6f0ff" d="M86.956 75.186a5.3 5.3 0 0 0 .249-1.646V53.098V73.54a5.3 5.3 0 0 1-.25 1.646z"/><path fill="#000" d="M86.956 75.186a5.3 5.3 0 0 0 .249-1.646V53.098V73.54a5.3 5.3 0 0 1-.25 1.646z" opacity=".1"/></g></svg>
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

export const Android = ({ path = "https://img.icons8.com/fluency/96/android-os.png", alt = "Android Icon" }: TechIconProps) => (
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