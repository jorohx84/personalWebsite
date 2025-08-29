import Testimonials from "./testimonials";


export const translations = {
    de: {
        header: {
            aboutme: 'Über mich',
            skills: 'Fähigkeiten',
            projects: 'Projekte',
            contact: 'Kontakt',
        },
        hero: {
            button: 'Über mich'
        },
        about: {
            headline: 'ÜBER MICH',
            button: 'Lass uns reden',
            softskills: [
                {
                    title: 'Analytisch',
                    description: 'Ich erfasse komplexe Anforderungen schnell, analysiere sie präzise und übersetze sie in durchdachte und nachhaltige Lösungen.',
                },
                {
                    title: 'Kommunikativ',
                    description: 'Ich lege großen Wert auf klare und offene Kommunikation, um gemeinsam Ideen gezielt zu entwickeln und erfolgreich umzusetzen.',
                },
                {
                    title: 'Strukturiert',
                    description: 'Ich arbeite fokussiert und effizient. Ich behalte auch bei komplexen Projekten stets den Überblick und das Ziel im Blick.',
                },
                {
                    title: 'Lösungsorientiert',
                    description: 'Ich entwickle pragmatische und nachhaltige Lösungen, die den Projekterfolg sicherstellen und langfristig Mehrwert bieten.',
                },
            ],
            textHeadline: 'Meine Leidenschaft für Softwareentwicklung',
            text: 'Software entwickeln ist meine Leidenschaft – als Frontend-Entwickler lebe ich es, Ideen in Code zu verwandeln und kreative, durchdachte Lösungen zu entwickeln. Ich liebe es, Probleme zu analysieren, elegante Strukturen zu schaffen und funktionierenden Code zu schreiben, der wirklich Sinn ergibt. Besonders begeistert mich die Zusammenarbeit mit anderen Entwicklern in Teams, bei der neue Ansätze entstehen und Projekte gemeinsam wachsen. Es fasziniert mich, komplexe Herausforderungen Schritt für Schritt zu lösen und dabei ständig dazuzulernen. Die Möglichkeit, meine Fähigkeiten kontinuierlich zu erweitern, motiviert mich, neue Technologien auszuprobieren, Prozesse zu optimieren und kreative Lösungen zu entwickeln, die echten Mehrwert schaffen. Programmieren ist für mich nicht nur ein Beruf, sondern eine Leidenschaft, die mich antreibt und jeden Tag inspiriert.',

        },
        skills: {
            headline: 'FÄHIGKEITEN',
            textHeadline: 'Modernes Webdevelopment mit agilem Mindset',
            text: 'Als Frontend-Entwickler mit fundierter Ausbildung in modernen Webtechnologien baue ich nutzerfreundliche und zukunftsorientierte Anwendungen. Aktuell erweitere ich meine Kompetenzen gezielt durch eine Weiterbildung zum Fullstack-Entwickler mit Python und Django, um Projekte ganzheitlich umsetzen zu können. Durch meine Erfahrung mit agilen Methoden wie Scrum und Kanban sowie den Einsatz von Tools wie Trello und Git arbeite ich strukturiert, effizient und teamorientiert. Mein Ziel ist es, innovative Lösungen zu entwickeln, die sowohl technisch als auch für den Endnutzer überzeugen.',
            subHeadline: 'Momentan bilde ich mich weiter in :',
        },
        projects: {
            headline: 'PROJEKTE',
            joinText: 'Join ist eine intuitive Multi-Device-Anwendung zur Aufgabenverwaltung im Stil eines Kanban-Boards. Aufgaben lassen sich per Drag & Drop zwischen den Bearbeitungsphasen verschieben. Jeder Task kann gezielt einzelnen Nutzern zugewiesen werden – ideal für Teamarbeit und strukturierte Workflows.',
            dabubbleText: 'DABubble ist ein Slack-Klon. Mit einer intuitiven Benutzeroberfläche, Echtzeitnachrichten und leistungsstarker Kanalorganisation fördert sie effizientes Arbeiten in Gruppen. Entwickelt wurde die Anwendung mit Angular und TypeScript – für maximale Performance und Skalierbarkeit im modernen Web.',
            applicationsText: 'Mit dem Bewerbungsmanager kannst du Bewerbungen erfassen, Stellenanzeigen auf eine Merkliste setzen und jederzeit den aktuellen Status deiner Bewerbungen und Termine im Blick behalten. Einfach, übersichtlich und ideal für deine Jobsuche.',
            todoappText: 'Mit dieser Desktop-Anwendung kannst du deine Aufgaben einfach anlegen, verwalten und priorisieren. Die App wurde mit React und TypeScript entwickelt und bietet eine übersichtliche Benutzeroberfläche für strukturierte Tagesplanung. Ob Termine, Notizen oder Prioritäten – behalte alles im Blick und steigere deine Produktivität.',
            personalWebsiteText: 'Moderne Personal Website für Freelancer und kreative Selbständige, die Fähigkeiten, Leistungen und Erfahrungen ansprechend präsentiert. Durch gezielte Animationen entsteht eine dynamische Nutzererfahrung, die Professionalität und Persönlichkeit gleichermaßen unterstreicht.',
            week: 'Wochen',
            duration: 'Dauer:',
        },
        testimonials: {
            commentRamona: 'Als Kollege ist Johannes absolut zuverlässig und hilfsbereit. Er bringt sich aktiv ins Team ein, unterstützt andere bei Herausforderungen und sorgt für eine angenehme Arbeitsatmosphäre. Besonders beeindruckt mich seine strukturierte und lösungsorientierte Arbeitsweise, die das Team voranbringt.',
            commentNadine: 'Mit Johannes zusammenzuarbeiten ist immer angenehm, da er professionell, kommunikativ und teamorientiert ist. Er geht respektvoll mit unterschiedlichen Meinungen um und schafft es, gemeinsame Lösungen zu finden. Seine positive Art motiviert das Team, und er ist immer bereit, Verantwortung zu übernehmen.',
            commentVolker: 'Johannes zeichnet sich durch eine hohe Eigenverantwortung und eine sehr strukturierte Arbeitsweise aus. Er arbeitet effizient, bleibt auch in stressigen Situationen lösungsorientiert und verliert nie den Blick für das Wesentliche. Zudem überzeugt er durch seine Teamfähigkeit, da er nicht nur eigene Aufgaben erfolgreich meistert, sondern auch aktiv zur Weiterentwicklung des Teams beiträgt.',
        },
    },

    en: {
        header: {
            aboutme: 'About',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact',
        },
        hero: {
            button: 'About'
        },
        about: {
            headline: 'ABOUT',
            button: 'Let`s talk',
            softskills: [
                {
                    title: 'Analytical',
                    description: 'I quickly understand complex requirements, analyze them precisely, and translate them into well-thought-out and sustainable solutions.',
                },
                {
                    title: 'Communicative',
                    description: 'I value clear and open communication to collaboratively develop ideas effectively and implement them successfully.',
                },
                {
                    title: 'Structured',
                    description: 'I work focused and efficiently. I keep an overview and the goal in mind, even for complex projects.',
                },
                {
                    title: 'Solution-oriented',
                    description: 'I develop pragmatic and sustainable solutions that ensure project success and provide long-term value.',
                },
            ],
            textHeadline: 'My Passion for Software Development',
            text: 'Software development is my passion – as a frontend developer, I thrive on turning ideas into code and creating thoughtful, innovative solutions. I enjoy analyzing problems, building elegant structures, and writing functional code that truly makes sense. What excites me most is collaborating with other developers in teams, where new approaches emerge and projects grow together. I’m fascinated by tackling complex challenges step by step while continuously learning along the way. The opportunity to expand my skills, experiment with new technologies, optimize processes, and develop creative solutions that deliver real value keeps me motivated. For me, coding is not just a job – it’s a passion that drives and inspires me every day.',
        },
        skills: {
            headline: 'SKILLS',
            textHeadline: 'Modern Web Development with an Agile Mindset',
            text: 'As a frontend developer with a solid background in modern web technologies, I create user-friendly and future-oriented applications. I am currently expanding my expertise through advanced training as a fullstack developer with Python and Django, enabling me to deliver complete end-to-end solutions. With experience in agile methodologies such as Scrum and Kanban, and the use of collaboration tools like Trello and Git, I work in a structured, efficient, and team-oriented way. My goal is to develop innovative solutions that excel both technically and in terms of user experience.',
            subHeadline: 'I`m currently Learning :',
        },
        projects: {
            headline: 'PROJECTS',
            joinText: 'Join is an intuitive multi-device application for task management in the style of a Kanban board. Tasks can be moved between workflow stages via drag & drop. Each task can be assigned to individual users – ideal for teamwork and structured workflows.',
            dabubbleText: 'DABubble is a Slack clone. With an intuitive user interface, real-time messaging, and powerful channel organization, it promotes efficient group work. The application was developed using Angular and TypeScript for maximum performance and scalability in modern web development.',
            applicationsText: 'With the application manager, you can record job applications, add job postings to a watchlist, and always keep track of the current status of your applications and appointments. Simple, clear, and ideal for your job search.',
            todoappText: 'With this desktop application, you can easily create, manage, and prioritize your tasks. The app was developed with React and TypeScript and offers a clear interface for structured daily planning. Whether appointments, notes, or priorities – keep everything in view and increase your productivity.',
            personalWebsiteText: 'Modern personal website for freelancers and creative professionals that presents skills, services, and experience in an appealing way. Targeted animations create a dynamic user experience that highlights both professionalism and personality.',
            week: 'weeks',
            duration: 'Duration:',
        },
        testimonials: {

            commentRamona: 'Johannes is an absolutely reliable and helpful colleague. He actively contributes to the team, supports others with challenges, and helps create a positive work atmosphere. I am particularly impressed by his structured and solution-oriented approach, which drives the team forward.',
            commentNadine: 'Working with Johannes is always a pleasure because he is professional, communicative, and team-oriented. He respects different opinions and finds common solutions. His positive attitude motivates the team, and he is always ready to take on responsibility.',
            commentVolker: 'Johannes demonstrates a high level of responsibility and a very structured way of working. He is efficient, remains solution-oriented even in stressful situations, and never loses sight of what’s important. Additionally, he stands out for his teamwork skills, successfully managing his tasks while actively contributing to the team’s development.',
        },
    }
};
