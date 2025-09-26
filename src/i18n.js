import Testimonials from "./testimonials/testimonials";


export const translations = {
    de: {
        header: {
            aboutme: 'Über mich',
            stack: 'Stack',
            skills: 'Fähigkeiten',
            projects: 'Projekte',
            contact: 'Kontakt',
        },
        hero: {
            button: 'Über mich'
        },
        about: {
            headline: 'ÜBER MICH',
            subline: 'Hallo! Ich bin Johannes Roth',
            fact1: {
                fieldname: 'Alter',
                fieldvalue: '40 Jahre',
            },
            fact2: {
                fieldname: 'Wohnort',
                fieldvalue: '76863 Herxheim - Rheinland-Pfalz',
            },
            fact3: {
                fieldname: 'Familienstand',
                fieldvalue: 'verheiratet, 2 Kinder',
            },
            fact4: {
                fieldname: 'Sprachen',
                fieldvalue: 'Deutsch, Englisch',
            },

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
            // text: 'Software entwickeln ist meine Leidenschaft – als Frontend-Entwickler lebe ich es, Ideen in Code zu verwandeln und kreative, durchdachte Lösungen zu entwickeln. Ich liebe es, Probleme zu analysieren, elegante Strukturen zu schaffen und funktionierenden Code zu schreiben, der wirklich Sinn ergibt. Besonders begeistert mich die Zusammenarbeit mit anderen Entwicklern in Teams, bei der neue Ansätze entstehen und Projekte gemeinsam wachsen. Es fasziniert mich, komplexe Herausforderungen Schritt für Schritt zu lösen und dabei ständig dazuzulernen. Die Möglichkeit, meine Fähigkeiten kontinuierlich zu erweitern, motiviert mich, neue Technologien auszuprobieren, Prozesse zu optimieren und kreative Lösungen zu entwickeln, die echten Mehrwert schaffen. Programmieren ist für mich nicht nur ein Beruf, sondern eine Leidenschaft, die mich antreibt und jeden Tag inspiriert.',
            text: 'Softwareentwicklung ist meine Leidenschaft – als Frontend-Entwickler liebe ich es, Ideen in Code zu verwandeln und durchdachte Lösungen zu schaffen. Ich analysiere gern Probleme, entwickle elegante Strukturen und schreibe sauberen, sinnvollen Code. Besonders schätze ich die Zusammenarbeit in Teams, in denen neue Ansätze entstehen und Projekte wachsen. Komplexe Herausforderungen Schritt für Schritt zu lösen und dabei ständig zu lernen, motiviert mich, neue Technologien auszuprobieren und Prozesse zu optimieren.',
        },
        stack: {
            headline: 'TECH-STACK',
            textHeadline: 'Modernes Webdevelopment mit agilem Mindset',
            frontendText: 'Als Frontend-Entwickler mit fundierter Ausbildung in modernen Webtechnologien gestalte ich nutzerzentrierte und performante Anwendungen. Dabei lege ich besonderen Wert auf klare Strukturen, durchdachte User Interfaces und sauberen, wartbaren Code. Meine technische Basis umfasst Frameworks wie React sowie den gezielten Einsatz von SCSS, CSS-Variablen und responsivem Design. In agilen Projekten arbeite ich mit Methoden wie Scrum oder Kanban und setze Tools wie Git und Trello zur transparenten und effizienten Zusammenarbeit ein. Mein Ziel ist es, Erlebnisse zu schaffen, die nicht nur funktional, sondern auch visuell und in der Bedienung überzeugen.',
            backendText: 'Aktuell erweitere ich meine Kenntnisse als Webentwickler durch eine gezielte Weiterbildung zum Fullstack-Entwickler mit Fokus auf Python und Django. Damit baue ich meine Fähigkeit aus, auch serverseitige Logiken, APIs und Datenbankanbindungen eigenständig umzusetzen. Dabei kommen relationale Datenbanken wie SQLite zum Einsatz, ebenso wie Konzepte der REST-Architektur. Mein Verständnis für strukturierte Codearchitektur, saubere Schnittstellen und sicherheitsrelevante Aspekte ermöglicht es mir, Webanwendungen ganzheitlich zu entwickeln. Unterstützt durch moderne Tools wie Git und agile Methoden wie Scrum und Kanban, arbeite ich effizient, strukturiert und immer lösungsorientiert im Team.',
            subHeadline: 'Auf dem Weg zum Fullstack Entwickler',
            methodsHeadline: 'Agiles Projektmanagement',
            methods: [
                {
                    name: 'Git',
                    text: 'Versionskontrolle ist ein zentraler Bestandteil meiner täglichen Arbeit. Ob im Team oder eigenverantwortlich – ich nutze Git sicher und effizient: von Feature-Branches über das Lösen von Merge-Konflikten bis hin zu sauberen, dokumentierten Pull Requests. So bleibt der Code nachvollziehbar, strukturiert und wartbar.'
                },
                {
                    name: 'Kanban',
                    text: 'Kanban unterstützt meine strukturierte und selbstorganisierte Arbeitsweise. Durch die Visualisierung von Aufgaben, frühzeitige Erkennung von Blockern und die kontinuierliche Optimierung des Workflows behalte ich stets den Überblick und arbeite fokussiert – sowohl im Team als auch eigenständig.'
                },
                {
                    name: 'Scrum',
                    text: 'Scrum hat mein Vorgehen in komplexen Projekten maßgeblich geprägt. Ich schätze die klare Struktur mit Sprint-Planung, Daily Stand-ups und Retrospektiven. Iteratives Arbeiten hilft mir, zuverlässig zu liefern, flexibel auf Feedback zu reagieren und Erwartungen im Team sowie bei Stakeholdern zu erfüllen.'
                }
            ]

        },
        skills: {
            headline: 'Fähigkeiten',

            skillcards: [
                {
                    skillname: 'Projektmanagement',
                    description: 'Erfahrung in der Planung und Umsetzung komplexer Projekte – von der Idee bis zum erfolgreichen Abschluss.',
                },
                {
                    skillname: 'Bedarfsanalyse',
                    description: 'Ich erkenne Bedürfnisse schnell und überführe sie in klare, umsetzbare Anforderungen für digitale Lösungen.'
                },
                {
                    skillname: 'Stakeholder-Management',
                    description: 'Sichere Kommunikation mit verschiedenen Stakeholdern – für reibungslose Abstimmung im Team und mit Kunden.'
                },
                {
                    skillname: 'Datenanalyse & Reporting',
                    description: 'Fundierte Erfahrung im Umgang mit Daten, Reports und KPIs – wichtig für fundierte Entscheidungen im Entwicklungsprozess.'
                },
                {
                    skillname: 'Prozessoptimierung',
                    description: 'Ich erkenne Verbesserungspotenzial schnell und sorge für effizientere Abläufe – im Code wie auch im Workflow.'
                },
                {
                    skillname: 'Teamübergreifende Zusammenarbeit',
                    description: 'Erfolgreiche Zusammenarbeit mit interdisziplinären Teams ist für mich selbstverständlich – ob mit Design, Backend oder Projektleitung.'
                }
            ],
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
            headline: 'Empfehlungen',
            commentRamona: 'Als Kollege ist Johannes absolut zuverlässig und hilfsbereit. Er bringt sich aktiv ins Team ein, unterstützt andere bei Herausforderungen und sorgt für eine angenehme Arbeitsatmosphäre. Besonders beeindruckt mich seine strukturierte und lösungsorientierte Arbeitsweise, die das Team voranbringt.',
            commentNadine: 'Mit Johannes zusammenzuarbeiten ist immer angenehm, da er professionell, kommunikativ und teamorientiert ist. Er geht respektvoll mit unterschiedlichen Meinungen um und schafft es, gemeinsame Lösungen zu finden. Seine positive Art motiviert das Team, und er ist immer bereit, Verantwortung zu übernehmen.',
            commentVolker: 'Johannes zeichnet sich durch eine hohe Eigenverantwortung und eine sehr strukturierte Arbeitsweise aus. Er arbeitet effizient, bleibt auch in stressigen Situationen lösungsorientiert und verliert nie den Blick für das Wesentliche. Zudem überzeugt er durch seine Teamfähigkeit, da er nicht nur eigene Aufgaben erfolgreich meistert, sondern auch aktiv zur Weiterentwicklung des Teams beiträgt.',
        },
        contact: {
            headline: 'Kontakt',
            text: 'Durchdachtes Interface Design entsteht nicht zufällig – es ist das Ergebnis von technischem Verständnis, einem Auge fürs Detail und echter Begeisterung für Webentwicklung. Wenn du jemanden suchst, der genau das mitbringt und sich schnell in neue Teams, Tools und Themen einarbeitet, dann lass uns ins Gespräch kommen. Ich freue mich auf deine Nachricht!',
            response: 'Nachricht gesendet.',
        },
        contactform: {
            name: 'Name',
            email: 'E-Mail',
            phone: 'Telefon',
            message: 'Nachricht',
            privacy1: 'Bitte stimme der',
            privacy2: ' zu.',
            link: 'Datenschutzerklärung',
            emptyfields: {
                name: 'Name erforderlich',
                email: 'E-Mail-Adresse erforderlich',
                phone: 'Telefonnummer erforderlich',
                message: 'Bitte geben Sie eine Nachricht ein',
                privacy: 'Bitte der Datenschutzbestimmung zustimmen',
            },
            errormessages: {
                email: 'Ungültige E-Mail',
                phone: 'Bitte gültige Telefonnummer eingeben',
                message: 'Mindestens 10 Zeichen',
            },
        },

        imprint: {
            h1: "Impressum",
            responsible: {
                h2: "Verantwortlich gemäß § 5 TMG",
                name: "Johannes Roth",
                address: "Max-Seither-Ring 32, 76863 Herxheim",

            },
            contentLiability: {
                h2: "Haftung für Inhalte",
                responsibility: "Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.",
                noMonitoringObligation: "Nach §§ 8 bis 10 TMG bin ich jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
                removalObligation: "Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.",
                liabilityStart: "Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen werde ich diese Inhalte umgehend entfernen."
            },
            linksLiability: {
                h2: "Haftung für Links",
                externalLinks: "Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen.",
                responsibilityThirdParties: "Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.",
                monitoringLinks: "Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.",
                removalLinks: "Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen."
            },
            copyright: {
                h2: "Urheberrecht",
                ownership: "Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.",
                usageRestriction: "Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.",
                personalUse: "Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.",
                thirdPartyContent: "Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Inhalte Dritter sind als solche gekennzeichnet.",
                infringementNotice: "Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen."
            }
        },
        privacy: {
            h1: "Datenschutz",
            general: {
                h2: "Allgemeine Hinweise",
                intro: "Der Schutz Ihrer persönlichen Daten ist mir ein besonderes Anliegen. Ich behandle Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.",
                scope: "Diese Datenschutzerklärung informiert über die Art, den Umfang und Zweck der Erhebung und Verwendung personenbezogener Daten auf dieser Website."
            },
            dataCollection: {
                h2: "Erhebung und Speicherung personenbezogener Daten",
                automaticData: "Beim Besuch dieser Website werden automatisch Informationen erfasst, die Ihr Browser übermittelt. Dazu gehören: IP-Adresse, Datum und Uhrzeit des Zugriffs, verwendeter Browser, Betriebssystem und Referrer-URL. Diese Daten sind nicht bestimmten Personen zuordenbar.",
                contactData: "Wenn Sie mich per E-Mail kontaktieren, werden Ihre Angaben zur Bearbeitung der Anfrage sowie für mögliche Anschlussfragen gespeichert. Diese Daten gebe ich nicht ohne Ihre Einwilligung weiter."
            },
            usage: {
                h2: "Verwendung der Daten",
                purpose: "Die erfassten Daten dienen ausschließlich der Sicherstellung eines reibungslosen Verbindungsaufbaus der Website, zur Auswertung der Systemsicherheit und -stabilität sowie zu administrativen Zwecken.",
                noProfiling: "Es erfolgt keine Zusammenführung dieser Daten mit anderen Datenquellen und keine Erstellung von Nutzerprofilen."
            },
            rights: {
                h2: "Ihre Rechte",
                information: "Sie haben das Recht, jederzeit Auskunft über Ihre gespeicherten personenbezogenen Daten zu erhalten.",
                correction: "Sie haben das Recht auf Berichtigung unrichtiger Daten.",
                deletion: "Sie haben das Recht auf Löschung Ihrer Daten, sofern dem keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
                objection: "Sie haben das Recht, der Verarbeitung Ihrer personenbezogenen Daten zu widersprechen."
            },
            contact: {
                h2: "Verantwortliche Stelle",
                info: "Für Fragen zum Datenschutz können Sie sich jederzeit an mich wenden:",
                name: "Johannes Roth",
                email: "<a href='mailto:max@mustermann.dev'>max@mustermann.dev</a>",
                phone: "<a href='tel:+491234567890'>+49 123 4567890</a>"
            }
        },

        footer: {
            legal: 'Impressum',
            privacy: 'Datenschutz',
        }
    },

    en: {
        header: {
            aboutme: 'About',
            stack: 'Stack',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact',
        },
        hero: {
            button: 'About'
        },
        about: {
            headline: 'ABOUT ME',
            subline: 'Hi There! I`m Johannes Roth',
            fact1: {
                fieldname: 'Age',
                fieldvalue: '40 years',
            },
            fact2: {
                fieldname: 'Location',
                fieldvalue: '76863 Herxheim - Rhineland-Palatinate',
            },
            fact3: {
                fieldname: 'Marital Status',
                fieldvalue: 'married, 2 children',
            },
            fact4: {
                fieldname: 'Languages',
                fieldvalue: 'german, english',
            },
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
            //     text: 'Software development is my passion – as a frontend developer, I thrive on turning ideas into code and creating thoughtful, innovative solutions. I enjoy analyzing problems, building elegant structures, and writing functional code that truly makes sense. What excites me most is collaborating with other developers in teams, where new approaches emerge and projects grow together. I’m fascinated by tackling complex challenges step by step while continuously learning along the way. The opportunity to expand my skills, experiment with new technologies, optimize processes, and develop creative solutions that deliver real value keeps me motivated. For me, coding is not just a job – it’s a passion that drives and inspires me every day.',

            text: 'Software development is my passion – as a frontend developer, I love turning ideas into code and creating thoughtful solutions. I enjoy analyzing problems, building elegant structures, and writing clean, meaningful code. I especially value collaboration in teams, where new ideas emerge and projects grow. Solving complex challenges step by step and continuously learning motivates me to explore new technologies and optimize processes.',
        },
        stack: {
            headline: 'TECH-STACK',
            textHeadline: 'Modern Web Development with an Agile Mindset',
            frontendText: 'As a frontend developer with a strong foundation in modern web technologies, I create user-centered and high-performance applications. I place particular emphasis on clear structures, thoughtful user interfaces, and clean, maintainable code. My technical skillset includes frameworks like React as well as the use of SCSS, CSS variables, and responsive design principles. In agile projects, I work with methods such as Scrum and Kanban and rely on tools like Git and Trello for transparent and efficient collaboration. My goal is to craft digital experiences that are not only functional, but also visually appealing and intuitive to use.',
            backendText: 'I am currently expanding my skills as a web developer through targeted training to become a full-stack developer with a focus on Python and Django. This enables me to independently implement backend logic, APIs, and database integration. I work with relational databases such as SQLite and apply concepts of REST architecture to build robust server-side applications. My understanding of structured code architecture, clean interfaces, and security best practices allows me to develop web solutions end-to-end. Supported by modern tools like Git and agile methodologies such as Scrum and Kanban, I contribute to efficient, structured, and solution-oriented teamwork.',

            subHeadline: 'On the way to full-stack developer',
            methodsHeadline: 'Agile project management',
            methods: [
                {
                    name: 'Git',
                    text: 'Version control is a core part of how I work. Whether collaborating in a team or managing features independently, I use Git confidently – from feature branching to resolving merge conflicts and submitting clean, well-documented pull requests. It helps me keep codebases organized, traceable, and easy to maintain.'
                },
                {
                    name: 'Kanban',
                    text: 'Kanban supports my ability to work in a structured and self-driven way. By visualizing tasks, identifying blockers early, and optimizing flow, I can maintain focus on priorities and deliver consistently. I regularly use Kanban boards to stay on top of work in both solo and team settings.'
                },
                {
                    name: 'Scrum',
                    text: 'Scrum has shaped the way I approach complex projects. I value the structure it brings through sprint planning, daily stand-ups, and retrospectives. Working in time-boxed iterations helps me deliver reliable outcomes, adapt to feedback, and stay aligned with team and stakeholder expectations.'
                }
            ]

        },
        skills: {
            headline: 'Skills',
            skillcards: [
                {
                    skillname: 'Project Management',
                    description: 'Experience in planning and executing complex projects – from the initial idea to successful completion.'
                },
                {
                    skillname: 'Requirements Analysis',
                    description: 'I quickly identify needs and translate them into clear, actionable requirements for digital solutions.'
                },
                {
                    skillname: 'Stakeholder Management',
                    description: 'Confident communication with various stakeholders – ensuring smooth coordination within the team and with clients.'
                },
                {
                    skillname: 'Data Analysis & Reporting',
                    description: 'Solid experience working with data, reports, and KPIs – essential for well-informed decisions during the development process.'
                },
                {
                    skillname: 'Process Optimization',
                    description: 'I quickly identify areas for improvement and ensure more efficient workflows – both in code and in organizational processes.'
                },
                {
                    skillname: 'Cross-Functional Collaboration',
                    description: 'Working successfully with interdisciplinary teams is second nature to me – whether with design, backend, or project management.'
                }
            ],
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
            headline: 'Testimonials',
            commentRamona: 'Johannes is an absolutely reliable and helpful colleague. He actively contributes to the team, supports others with challenges, and helps create a positive work atmosphere. I am particularly impressed by his structured and solution-oriented approach, which drives the team forward.',
            commentNadine: 'Working with Johannes is always a pleasure because he is professional, communicative, and team-oriented. He respects different opinions and finds common solutions. His positive attitude motivates the team, and he is always ready to take on responsibility.',
            commentVolker: 'Johannes demonstrates a high level of responsibility and a very structured way of working. He is efficient, remains solution-oriented even in stressful situations, and never loses sight of what’s important. Additionally, he stands out for his teamwork skills, successfully managing his tasks while actively contributing to the team’s development.',
        },
        contact: {
            headline: 'Contact',
            text: 'Effective user interfaces doesn’t happen by accident – it’s the result of technical understanding, attention to detail, and genuine passion for web development. If you’re looking for someone who brings all of that to the table and quickly adapts to new teams, tools, and topics, let’s talk. I’m looking forward to hearing from you!',
            response: 'message send.',
        },
        contactform: {
            name: 'name',
            email: 'mail',
            phone: 'phone',
            message: 'message',
            privacy1: 'please accept the',
            privacy2: '.',
            link: 'privacy policy',
            emptyfields: {
                name: 'name required',
                email: 'email required',
                phone: 'phone number required',
                message: 'please enter your message here',
                privacy: 'please accept the privacy policy',
            },
            errormessages: {
                email: 'invalid email',
                phone: 'invalid phone number',
                message: 'At least 10 characters',
            },
        },
        imprint: {
            h1: "Imprint",
            responsible: {
                h2: "Responsible according to § 5 TMG",
                name: "Johannes Roth",
                address: "Max-Seither-Ring 32, 76863 Herxheim",

            },
            contentLiability: {
                h2: "Liability for Content",
                responsibility: "As a service provider, I am responsible for my own content on these pages in accordance with § 7 para.1 TMG under general law.",
                noMonitoringObligation: "According to §§ 8 to 10 TMG, however, I am not obliged to monitor transmitted or stored third-party information or investigate circumstances that indicate illegal activity.",
                removalObligation: "Obligations to remove or block the use of information under general laws remain unaffected.",
                liabilityStart: "However, liability in this regard is only possible from the time of knowledge of a specific legal violation. Upon becoming aware of such infringements, I will remove this content immediately."
            },
            linksLiability: {
                h2: "Liability for Links",
                externalLinks: "My website contains links to external websites of third parties, on whose content I have no influence. Therefore, I cannot accept any liability for this external content.",
                responsibilityThirdParties: "The respective provider or operator of the linked pages is always responsible for the content of those pages.",
                monitoringLinks: "Permanent monitoring of the content of the linked pages is not reasonable without concrete indications of a violation of the law.",
                removalLinks: "Upon becoming aware of any infringements, I will remove such links immediately."
            },
            copyright: {
                h2: "Copyright",
                ownership: "The content and works created by the site operator on these pages are subject to German copyright law.",
                usageRestriction: "The reproduction, editing, distribution, and any kind of use outside the limits of copyright law require the written consent of the respective author or creator.",
                personalUse: "Downloads and copies of this site are only permitted for private, non-commercial use.",
                thirdPartyContent: "Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. Third-party content is marked as such.",
                infringementNotice: "If you nevertheless become aware of a copyright infringement, please notify me. Upon becoming aware of such infringements, I will remove this content immediately."
            }
        },
        privacy: {
            h1: "Privacy Policy",
            general: {
                h2: "General Information",
                intro: "Protecting your personal data is very important to me. I treat your personal data confidentially and in accordance with the legal data protection regulations and this privacy policy.",
                scope: "This privacy policy explains the nature, scope, and purpose of the collection and use of personal data on this website."
            },
            dataCollection: {
                h2: "Collection and Storage of Personal Data",
                automaticData: "When visiting this website, information that your browser transmits is automatically collected. This includes: IP address, date and time of access, browser used, operating system, and referrer URL. This data cannot be assigned to specific individuals.",
                contactData: "If you contact me via email, your information will be stored for the purpose of processing the request and for possible follow-up questions. This data will not be shared without your consent."
            },
            usage: {
                h2: "Use of Data",
                purpose: "The data collected is used solely to ensure a smooth connection to the website, to evaluate system security and stability, and for administrative purposes.",
                noProfiling: "There is no merging of this data with other data sources and no user profiling takes place."
            },
            rights: {
                h2: "Your Rights",
                information: "You have the right to request information about your stored personal data at any time.",
                correction: "You have the right to request correction of inaccurate data.",
                deletion: "You have the right to request deletion of your data unless legal retention obligations prevent this.",
                objection: "You have the right to object to the processing of your personal data."
            },
            contact: {
                h2: "Responsible Entity",
                info: "If you have questions regarding data protection, you can contact me at any time:",
                name: "Johannes Roth",

            }
        },
        footer: {
            legal: 'legal notice',
            privacy: 'privacy police',
        }
    }

};


