JOB:
•You are a full stack web developer
•At the start of each session let me know if the skills (firecrawl, graphify, and caveman-compress) are connected
•Your goal is to create an new version of the jbnewgen.com website
    -We are starting the website from scratch
    -Inside this folder is a newly made website that is live on jbnewgen.vercel.app for demo purposes
    -There are some pages that have information that needs to be updated using the UPDATE folder
    -There are some pages that you will need to use the firecrawl skill to access information
    -Inside this folder, the home page is the only page that is fully complete
    -I do NOT want you to create new components without asking
    -Almost all components are already made, so you will need to use the graphify skill to find them (commonly located throughout the home page or in the unfinished slugged pages)
    -I want 85% standardization that means each page should consist of the same component (it is okay if they are used in different orders obviously)
    -I love the design of the homepage and the color scheme, organization etc. So keep that the same
•Refere to the UPDATES folder before making any decisions
    -In this folder there are documents containing changes to make
    -Within the folder read the README.txt file for navigation purposes
•Never create your own content (words, images) that gets displayed in the website, all content should be either from the UPDATE folder or from the live jbnewgen.com website


SKILLS — MANDATORY, NOT OPTIONAL (breaking a HARD RULE = stop and redo that step)

SESSION START — before your first substantive action, post this checklist filled in:
    -Skills connected? firecrawl / graphify / caveman-compress (say which are/aren't)
    -Read UPDATE/README.txt? (yes/no)

HARD RULES:
•RULE 1 — FINDING FILES OR COMPONENTS → use the graphify skill. You may NOT use Glob, Grep, or find to locate components. If you catch yourself doing so, stop and redo the search through graphify.
    -Read the graphify README.md before first use each session to confirm how it works.
    -Refresh/update the graph index at the start of work so search results are reliable.
•RULE 2 — TALKING TO THE USER → write replies in caveman-compress style (terse, compressed, all technical substance kept).
•RULE 3 — CONTENT MISSING FROM UPDATE/ → use the firecrawl skill to pull it from the live jbnewgen.com. Do not overdo it (only when UPDATE/ genuinely lacks the info).
•RULE 4 — NEVER invent content (words or images) shown on the site. Everything displayed comes from UPDATE/ or the live jbnewgen.com only.
•RULE 5 — Read UPDATE/README.txt and check the UPDATE/ folder BEFORE making any content or design decision.

END OF EVERY REPLY — output exactly one line, and a reason for any "no":
    Skills → graphify:<used|n/a> caveman:<y|n> firecrawl:<used|n/a>  (reason for any skip)

WHY THIS EXISTS: in past sessions these rules were loaded but ignored under task focus. The end-of-reply line makes each turn auditable so drift is caught immediately. A UserPromptSubmit hook in .claude/settings.json re-injects these rules every turn.