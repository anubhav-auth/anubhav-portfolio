import React from "react";

interface TechIconProps {
  path?: string; // Optional, as default paths are provided
  alt?: string;
}

// Programming Languages
export const Kotlin = ({ path = "https://img.icons8.com/color/32/kotlin.png", alt = "Kotlin Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const Jetpack_compose = ({ path = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jetpackcompose/jetpackcompose-original.svg", alt = "Jetpack COmpose Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const Java = ({ path = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", alt = "Java Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const Rust = ({ path = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg", alt = "Rust Icon" }: TechIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={34} viewBox="0 0 512 512"><path fill="#cd0a0a" d="M508.5 249.8 486.7 236.2c-.2-2-.3-3.9-.6-5.9l18.7-17.5a7.4 7.4 0 0 0 -2.4-12.3l-24-9c-.5-1.9-1.1-3.8-1.7-5.6l15-20.8a7.4 7.4 0 0 0 -4.8-11.5l-25.4-4.2c-.9-1.7-1.8-3.5-2.7-5.2l10.7-23.4a7.4 7.4 0 0 0 -7-10.4l-25.8 .9q-1.8-2.2-3.6-4.4L439 81.8A7.4 7.4 0 0 0 430.2 73L405 78.9q-2.2-1.8-4.4-3.6l.9-25.8a7.4 7.4 0 0 0 -10.4-7L367.7 53.2c-1.7-.9-3.4-1.8-5.2-2.7L358.4 25.1a7.4 7.4 0 0 0 -11.5-4.8L326 35.3c-1.9-.6-3.8-1.1-5.6-1.7l-9-24a7.4 7.4 0 0 0 -12.3-2.4l-17.5 18.7c-2-.2-3.9-.4-5.9-.6L262.3 3.5a7.4 7.4 0 0 0 -12.5 0L236.2 25.3c-2 .2-3.9 .3-5.9 .6L212.9 7.1a7.4 7.4 0 0 0 -12.3 2.4l-9 24c-1.9 .6-3.8 1.1-5.7 1.7l-20.8-15a7.4 7.4 0 0 0 -11.5 4.8l-4.2 25.4c-1.7 .9-3.5 1.8-5.2 2.7L120.9 42.6a7.4 7.4 0 0 0 -10.4 7l.9 25.8c-1.5 1.2-3 2.4-4.4 3.6L81.8 73A7.4 7.4 0 0 0 73 81.8L78.9 107c-1.2 1.5-2.4 2.9-3.6 4.4l-25.8-.9a7.4 7.4 0 0 0 -6.4 3.3 7.4 7.4 0 0 0 -.6 7.1l10.7 23.4c-.9 1.7-1.8 3.4-2.7 5.2L25.1 153.6a7.4 7.4 0 0 0 -4.8 11.5l15 20.8c-.6 1.9-1.1 3.8-1.7 5.7l-24 9a7.4 7.4 0 0 0 -2.4 12.3l18.7 17.5c-.2 2-.4 3.9-.6 5.9L3.5 249.8a7.4 7.4 0 0 0 0 12.5L25.3 275.8c.2 2 .3 3.9 .6 5.9L7.1 299.1a7.4 7.4 0 0 0 2.4 12.3l24 9c.6 1.9 1.1 3.8 1.7 5.7l-15 20.8a7.4 7.4 0 0 0 4.8 11.5l25.4 4.2c.9 1.7 1.8 3.5 2.7 5.1L42.6 391.1a7.4 7.4 0 0 0 .6 7.1 7.1 7.1 0 0 0 6.4 3.3l25.8-.9q1.8 2.2 3.6 4.4L73 430.2A7.4 7.4 0 0 0 81.8 439L107 433.1q2.2 1.8 4.4 3.6l-.9 25.8a7.4 7.4 0 0 0 10.4 7l23.4-10.7c1.7 .9 3.4 1.8 5.1 2.7l4.2 25.4a7.3 7.3 0 0 0 11.5 4.8l20.8-15c1.9 .6 3.8 1.1 5.7 1.7l9 24a7.4 7.4 0 0 0 12.3 2.4l17.5-18.7c2 .2 3.9 .4 5.9 .6l13.5 21.8a7.4 7.4 0 0 0 12.5 0l13.5-21.8c2-.2 3.9-.3 5.9-.6l17.5 18.7a7.4 7.4 0 0 0 12.3-2.4l9-24c1.9-.6 3.8-1.1 5.7-1.7l20.8 15a7.3 7.3 0 0 0 11.5-4.8l4.2-25.4c1.7-.9 3.5-1.8 5.2-2.7l23.4 10.7a7.4 7.4 0 0 0 10.4-7l-.9-25.8q2.2-1.8 4.4-3.6L430.2 439a7.4 7.4 0 0 0 8.8-8.8L433.1 405q1.8-2.2 3.6-4.4l25.8 .9a7.2 7.2 0 0 0 6.4-3.3 7.4 7.4 0 0 0 .6-7.1L458.8 367.7c.9-1.7 1.8-3.4 2.7-5.2l25.4-4.2a7.4 7.4 0 0 0 4.8-11.5l-15-20.8c.6-1.9 1.1-3.8 1.7-5.7l24-9a7.4 7.4 0 0 0 2.4-12.3l-18.7-17.5c.2-2 .4-3.9 .6-5.9l21.8-13.5a7.4 7.4 0 0 0 0-12.5zm-151 129.1A13.9 13.9 0 0 0 341 389.5l-7.6 35.7A187.5 187.5 0 0 1 177 424.4l-7.6-35.7a13.9 13.9 0 0 0 -16.5-10.7l-31.5 6.8a187.4 187.4 0 0 1 -16.3-19.2H258.3c1.7 0 2.9-.3 2.9-1.9V309.6c0-1.6-1.2-1.9-2.9-1.9H213.5l.1-34.4H262c4.4 0 23.7 1.3 29.8 25.9 1.9 7.6 6.2 32.1 9.1 40 2.9 8.8 14.6 26.5 27.1 26.5H407a187.3 187.3 0 0 1 -17.3 20.1zm25.8 34.5A15.2 15.2 0 1 1 368 398.1h.4A15.2 15.2 0 0 1 383.2 413.3zm-225.6-.7a15.2 15.2 0 1 1 -15.3-15.3h.5A15.3 15.3 0 0 1 157.6 412.6zM69.6 234.2l32.8-14.6a13.9 13.9 0 0 0 7.1-18.3L102.7 186h26.6V305.7H75.7A187.7 187.7 0 0 1 69.6 234.2zM58.3 198.1a15.2 15.2 0 0 1 15.2-15.3H74a15.2 15.2 0 1 1 -15.7 15.2zm155.2 24.5 .1-35.3h63.3c3.3 0 23.1 3.8 23.1 18.6 0 12.3-15.2 16.7-27.7 16.7zM399 306.7c-9.8 1.1-20.6-4.1-22-10.1-5.8-32.5-15.4-39.4-30.6-51.4 18.9-12 38.5-29.6 38.5-53.3 0-25.5-17.5-41.6-29.4-49.5-16.8-11-35.3-13.2-40.3-13.2H116.3A187.5 187.5 0 0 1 221.2 70.1l23.5 24.6a13.8 13.8 0 0 0 19.6 .4l26.3-25a187.5 187.5 0 0 1 128.4 91.4l-18 40.6A14 14 0 0 0 408 220.4l34.6 15.3a187.1 187.1 0 0 1 .4 32.5H423.7c-1.9 0-2.7 1.3-2.7 3.1v8.8C421 301 409.3 305.6 399 306.7zM240 60.2A15.2 15.2 0 0 1 255.2 45h.5A15.2 15.2 0 1 1 240 60.2zM436.8 214a15.2 15.2 0 1 1 0-30.5h.4a15.2 15.2 0 0 1 -.4 30.5z"/></svg>
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

export const Tailwind_CSS = ({ path = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", alt = "Tailwind CSS Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const Bash = ({ path = "https://img.icons8.com/color/32/bash.png", alt = "Bash Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const Koin = ({ path = "https://insert-koin.io/img/koin_new_logo.png", alt = "Koin Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const Retrofit = ({ path = "https://api.nuget.org/v3-flatcontainer/square.retrofit/1.9.0/icon", alt = "Retrofit Icon" }: TechIconProps) => (
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

export const Ktor = ({ path = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ktor/ktor-original.svg", alt = "Ktor Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const SpringBoot = ({ path = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg", alt = "Spring Boot Icon" }: TechIconProps) => (
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

export const Kafka = ({ path = "https://img.icons8.com/nolan/64/apache-kafka.png", alt = "Kafka Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

// Databases
export const MySQL = ({ path = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", alt = "MySQL Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const MongoDB = ({ path = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", alt = "MongoDB Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const SQLite = ({ path = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg", alt = "SQLite Icon" }: TechIconProps) => (
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

export const Git = ({ path = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", alt = "Git Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const GitHub = ({ path = "https://img.icons8.com/nolan/64/github.png", alt = "GitHub Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const Postman = ({ path = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg", alt = "Postman Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const Linux = ({ path = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg", alt = "Linux Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);


// Python ML Libraries

export const Matplotlib = ({ path = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg", alt = "Matplotlib Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const NumPy = ({ path = "https://img.icons8.com/color/32/numpy.png", alt = "NumPy Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const Pandas = ({ path = "https://img.icons8.com/color/32/pandas.png", alt = "Pandas Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

export const ScikitLearn = ({ path = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg", alt = "Scikit-learn Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);
export const Dagger_hilt = ({ path = "https://www.svgrepo.com/show/321545/sword-hilt.svg", alt = "dagger-hilt Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);
export const Solana = ({ path = "https://img.icons8.com/nolan/64/solana.png", alt = "solana Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);
export const Anchor = ({ path = "https://camo.githubusercontent.com/590ccfb4e70a27673047ee879ed409981c05b2da403e60b4aaa7961ccdb46001/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f46565556614f3958454141756c764b3f666f726d61743d706e67266e616d653d736d616c6c", alt = "anchor Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);
export const Fast_ai = ({ path = "https://repository-images.githubusercontent.com/487949797/588d1667-9115-4d58-b2f7-955a33b88a4e", alt = "fastai Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-15 h-8" />
);
export const Kubernetes = ({ path = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg", alt = "kubernetes Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);

// social icons

export const Instagram = ({ path = "https://img.icons8.com/fluency/48/instagram-new.png", alt = "Instagram Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);
export const Twitter = ({ path = "https://img.icons8.com/ios/50/twitterx--v1.png", alt = " Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8 invert" />
);
export const Linkedin = ({ path = "https://img.icons8.com/color/48/linkedin.png", alt = " Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);
export const Devto = ({ path = "https://img.icons8.com/color/48/dev-community.png", alt = " Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);
export const Medium = ({ path = "https://img.icons8.com/glyph-neue/64/medium-monogram.png", alt = " Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8 invert" />
);
export const Leetcode = ({ path = "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-shadow-tal-revivo.png", alt = " Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8 " />
);
export const Codeforces = ({ path = "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-codeforces-programming-competitions-and-contests-programming-community-logo-color-tal-revivo.png", alt = " Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);
export const Medial = ({ path = "https://medial.app/image/medial-white.png", alt = " Icon" }: TechIconProps) => (
  <img src={path} alt={alt} className="w-8 h-8" />
);