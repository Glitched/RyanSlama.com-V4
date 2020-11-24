export const recommends: {
    title: string,
    description: string,
    event: string,
    href?: string
}[] = [{
    title: "Canary in the Datamines: Using Log Canary to find PII",
    event: "LocoMocoSec 2020",
    description: "Why does sensitive data always seem to end up places it shouldn't? We won't answer that exact question in this talk, but we *will* tell you about a tool that we wrote to combat the problem. Log Canary is a tool we wrote to continuously probe our product for places where PII might leak into logs, so that we can resolve the issue before any real data is written. Join us as we explain the concept of Log Canary and go over lessons we learned in its development and deployment.",
    href: "https://slideslive.com/38942575/canary-in-the-datamines-using-log-canary-to-find-pii"
}, {
    title: "10,000 Dependencies Under the Sea",
    event: "DEF CON 28: AppSec Village",
    description: "Come on our journey of creating scalable tooling and processes to automatically identify vulnerabilities in third-party libraries and handle the question of “ok we found this, who’s going to fix it?”",
    href: "https://www.youtube.com/watch?v=YgsoBP2ahmU&t=6s"
}]
