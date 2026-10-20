import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, 
  Settings, 
  Wifi, 
  Calendar, 
  Clock, 
  ArrowRight, 
  ArrowLeft,
  Sparkles,
  Tv,
  Users
} from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Réalité Virtuelle et Réalité Augmentée – Blender, Unity et Meta Quest 3",
    category: "VR/AR & Simulation",
    excerpt: "Création d'un espace bureau virtuel : modélisation 3D sous Blender, développement des interactions sous Unity (C#) et déploiement sur casque autonome Meta Quest 3.",
    date: "Mai 2025",
    readTime: "12 min",
    icon: Tv,
    gradient: "from-purple-500 to-pink-500",
    tags: ["VR", "AR", "Blender", "Unity", "Meta Quest 3", "C#"],
    image: "/images/VRARR.png",
    content: `
# Réalité Virtuelle et Réalité Augmentée – Blender, Unity et Meta Quest 3

La réalité virtuelle (VR) et la réalité augmentée (AR) ouvrent des possibilités infinies pour créer des expériences immersives, que ce soit pour le divertissement, la formation ou la simulation industrielle. Dans cet article, je vous partage mon retour d'expérience sur la création d'un espace bureau virtuel, de la modélisation 3D au déploiement sur casque autonome.

## Pourquoi se lancer dans la VR/AR aujourd'hui ?

Les technologies VR/AR ont considérablement évolué ces dernières années. Les casques sont devenus autonomes (plus besoin de PC puissant), les moteurs 3D sont plus accessibles que jamais (Unity, Unreal Engine, Godot), et les outils de modélisation comme Blender offrent des fonctionnalités professionnelles gratuitement.

C'est dans ce contexte que j'ai décidé de créer un espace bureau virtuel interactif. L'objectif était simple : reproduire un environnement de bureau en 3D où l'utilisateur peut interagir avec les objets, les déplacer, et expérimenter les lois de la physique dans un espace immersif.

## Blender – La modélisation 3D

Pour créer les objets du bureau virtuel, j'ai utilisé Blender, un logiciel de modélisation 3D open source extrêmement puissant.

**Ce que j'ai modélisé :**
- Un bureau avec tiroirs et plateau de travail
- Une chaise ergonomique
- Des accessoires (ordinateur, clavier, souris, livres, mug)
- Des éléments de décor (lampes, plantes, posters)

Chaque objet a été texturé avec soin pour rendre l'environnement réaliste. J'ai utilisé des textures PBR (Physically Based Rendering) pour les matériaux comme le bois, le métal et le plastique. L'exportation s'est faite au format FBX, compatible avec Unity.

## Unity – Le développement des interactions

Une fois les modèles 3D importés dans Unity, la partie la plus intéressante a commencé : donner vie à l'environnement avec des interactions.

**Les interactions implémentées :**

1. **Déplacement d'objets** : L'utilisateur peut saisir n'importe quel objet (un livre, un mug, une souris) avec les contrôleurs du Meta Quest 3, le déplacer dans l'espace, et le relâcher où il le souhaite.

2. **Gestion des propriétés physiques** : Chaque objet possède un rigidbody (corps rigide) et des colliders (collisionneurs). Ainsi, lorsque l'utilisateur lâche un objet, il tombe, rebondit, et interagit avec les autres objets. Les frottements, masses et rebonds sont paramétrables.

3. **Téléportation** : Pour se déplacer dans l'environnement virtuel (nécessaire car l'espace réel est limité), j'ai implémenté un système de téléportation : l'utilisateur pointe une zone au sol avec un laser virtuel, relâche la gâchette, et se retrouve instantanément à cet endroit.

4. **Retour haptique** : À chaque interaction (prise d'objet, téléportation, validation), les contrôleurs vibrent pour renforcer l'immersion.

**Le code des interactions (C#) :**

\`\`\`csharp
public class GrabObject : MonoBehaviour
{
    private bool isGrabbed = false;
    private Transform controller;
    
    void Update()
    {
        if (controller != null && isGrabbed)
        {
            transform.position = controller.position;
            transform.rotation = controller.rotation;
        }
    }
    
    public void OnGrab(Transform hand)
    {
        isGrabbed = true;
        controller = hand;
        GetComponent<Rigidbody>().isKinematic = true;
    }
    
    public void OnRelease()
    {
        isGrabbed = false;
        controller = null;
        GetComponent<Rigidbody>().isKinematic = false;
        GetComponent<Rigidbody>().velocity = GetVelocity();
    }
}
\`\`\`

## Meta Quest 3 – Le déploiement

Le Meta Quest 3 est un casque VR autonome développé par Meta. Ses atouts sont nombreux :
- Pas besoin de PC : tout le calcul est embarqué
- Tracking des mains sans manettes (optionnel)
- Qualité d'affichage impressionnante (pancake lenses, résolution 2064x2208 par œil)
- Prix accessible pour les développeurs

**Pour déployer mon application :**
1. Installation du SDK Oculus Integration dans Unity
2. Configuration des paramètres de build (Android, arm64, OpenXR)
3. Activation du mode développeur sur le Quest 3
4. Build et installation via ADB (Android Debug Bridge)

## Résultat final

L'application fonctionne parfaitement sur le Meta Quest 3. L'utilisateur peut explorer l'espace bureau virtuel, interagir avec tous les objets, et expérimenter la physique en temps réel. Les performances sont fluides (72 FPS constants) grâce à l'optimisation des modèles et du code.

**Ce que j'ai appris :**
- Maîtriser Blender pour la modélisation 3D
- Comprendre l'écosystème Unity (GameObjects, Composants, Scènes)
- Programmer en C# pour les interactions
- Configurer un projet VR pour casque autonome
- Optimiser les performances (réduction du nombre de polygones, LOD, occlusion culling)

## Perspectives

Cette expérience m'a donné envie d'aller plus loin. Je pense explorer :
- Le multijoueur (plusieurs utilisateurs dans le même espace virtuel)
- La reconnaissance gestuelle (sans manettes)
- L'intégration de contenu généré par IA
- Des applications plus sérieuses (formation industrielle, maintenance à distance)

La VR/AR est un domaine fascinant en pleine expansion. Si vous voulez vous lancer, commencez par Blender pour la modélisation, Unity pour le développement, puis faites l'acquisition d'un Meta Quest 2 ou 3 pour tester. La courbe d'apprentissage est un peu raide, mais le jeu en vaut la chandelle !
    `
  },
  {
    id: 2,
    title: "Communication industrielle : Modbus, Profibus, MQTT – Lequel choisir ?",
    category: "Réseaux Industriels",
    excerpt: "Comparatif des protocoles de communication industrielle. Modbus pour la collecte terrain, Profibus pour le temps réel, MQTT pour l'IIoT cloud.",
    date: "Avril 2025",
    readTime: "10 min",
    icon: Wifi,
    gradient: "from-cyan-500 to-blue-600",
    tags: ["Modbus", "Profibus", "MQTT", "IIoT", "Réseaux Industriels"],
    image: "/images/comunication.png",
    content: `
# Communication industrielle : Modbus, Profibus, MQTT – Lequel choisir ?

Dans l'industrie, les automates, capteurs et actionneurs doivent communiquer. Le choix du protocole est stratégique.

## Modbus – Le protocole universel

Modbus a été créé en 1979 par Modicon. C'est le protocole le plus ancien et le plus répandu. Deux variantes existent :
- **Modbus RTU** : transmission série sur RS-485, distance jusqu'à 1200 mètres
- **Modbus TCP** : version sur Ethernet, compatible avec les réseaux d'entreprise

**Avantages :** simple, ouvert, compatible avec presque tous les équipements
**Inconvénients :** pas de sécurité intégrée, pas de temps réel dur

## Profibus – Le standard européen

Profibus est un protocole développé par Siemens. Il garantit un temps réel déterministe (< 1ms).

**Avantages :** temps réel, diagnostic poussé, large gamme d'équipements
**Inconvénients :** complexe à mettre en œuvre, écosystème coûteux

## MQTT – La révolution IIoT

MQTT est un protocole léger publish/subscribe, idéal pour l'IoT industriel.

**Avantages :** très léger, découplage émetteurs/récepteurs, parfait pour le cloud
**Inconvénients :** nécessite un broker, pas de temps réel dur

## Tableau comparatif

| Protocole | Débit max | Distance | Temps réel | Sécurité |
|-----------|-----------|----------|------------|----------|
| Modbus RTU | 115,2 kbps | 1200 m | Non | Non |
| Modbus TCP | 100 Mbps | Réseau | Non | Non |
| Profibus DP | 12 Mbps | 100 m | Oui (<1ms) | Limitée |
| MQTT | Variable | Internet | Non | TLS |

## Retour d'expérience terrain

Sur mon projet Labred, j'ai utilisé Modbus RTU pour interroger l'onduleur hybride Felicity, et MQTT pour remonter les données vers Azure IoT Hub. Un ESP32 a servi de passerelle.

**Conclusion :** privilégiez MQTT pour l'IIoT, Modbus pour la collecte terrain, Profibus pour les applications temps réel critiques.
    `
  },
  {
    id: 3,
    title: "PLC Programming : Ladder vs Structured Text – Quand utiliser chaque langage ?",
    category: "Automatisme",
    excerpt: "Comparaison des deux langages de programmation d'automates. Ladder pour la logique de sécurité, Structured Text pour les algorithmes complexes.",
    date: "Mars 2025",
    readTime: "11 min",
    icon: Settings,
    gradient: "from-green-500 to-emerald-600",
    tags: ["PLC", "Ladder", "Structured Text", "Siemens", "TIA Portal"],
    image: "/images/programming.png",
    content: `
# PLC Programming : Ladder vs Structured Text – Quand utiliser chaque langage ?

Les langages de programmation d'automates (PLC) sont normés par la CEI 61131-3. Ladder Diagram (LD) et Structured Text (ST) sont les plus utilisés.

## Ladder Diagram (LD) – Le langage graphique

Le Ladder Diagram est hérité du schéma électrique à relais.

**Avantages :**
- Très intuitif pour les électrotechniciens
- Débogage visuel (couleurs)
- Idéal pour la logique de sécurité

**Inconvénients :**
- Limité pour les mathématiques
- Fastidieux pour les algorithmes complexes

## Structured Text (ST) – Le langage textuel

Le Structured Text s'inspire du Pascal et du C.

**Avantages :**
- Compact et puissant
- Idéal pour les calculs (PID, régulation)
- Boucles et conditions complexes

**Inconvénients :**
- Moins accessible aux non-informaticiens
- Débogage moins visuel

## Exemple concret : Gestion d'un carrefour à feux sur Siemens S7-1200

**Partie Ladder (verrouillages de sécurité) :**
\`\`\`ladder
// Sécurité : les deux feux verts ne doivent jamais être actifs simultanément
%Q0.0 (Vert_NS)   %Q0.3 (Vert_EO)   %M0.0 (Erreur)
-----| |--------------| |--------------( )---
\`\`\`

**Partie Structured Text (temporisation et séquence) :**
\`\`\`structuredtext
CASE Etape OF
    0: // Tout rouge
        IF temps_attente > 5 THEN
            Etape := 1;
        END_IF;
    1: // Vert Nord-Sud
        IF temps_etape > 10 THEN
            Etape := 2;
        END_IF;
    2: // Orange Nord-Sud
        IF temps_etape > 3 THEN
            Etape := 3;
        END_IF;
END_CASE;
\`\`\`

## Meilleure pratique

| Tâche | Langage recommandé |
|-------|-------------------|
| Logique de sécurité | Ladder |
| Interface I/O | Ladder |
| Calculs PID | Structured Text |
| Séquence complexe | Structured Text |
| Communication | Structured Text |

**Conclusion :** Un bon programme mixe Ladder et Structured Text. Maîtrisez les deux, vous serez complet.
    `
  },
  {
    id: 4,
    title: "ROS pour la robotique industrielle : Par où commencer ?",
    category: "Robotique",
    excerpt: "Introduction au Robot Operating System (ROS2). Concepts clés, installation, simulation et passage au matériel réel.",
    date: "Février 2025",
    readTime: "10 min",
    icon: Cpu,
    gradient: "from-indigo-500 to-purple-600",
    tags: ["ROS", "ROS2", "Robotique", "Gazebo", "micro-ROS"],
    image: "/images/ros.png",
    content: `
# ROS pour la robotique industrielle : Par où commencer ?

ROS (Robot Operating System) est un middleware open source qui facilite le développement d'applications robotiques.

## ROS1 vs ROS2

| Fonctionnalité | ROS1 | ROS2 |
|----------------|------|------|
| Temps réel | Non | Oui |
| Sécurité | Non | TLS |
| Embarqué | Lourd | micro-ROS |
| Multirobot | Limité | Natif |

**Recommandation :** commencez directement par ROS2 (Humble Hawksbill).

## Concepts fondamentaux

- **Nodes** : processus indépendants
- **Topics** : communication publish/subscribe (asynchrone)
- **Services** : requête/réponse (synchrone)
- **Actions** : tâches longues avec feedback
- **Launch files** : lancement de plusieurs nodes

## Installation sur Ubuntu 22.04

\`\`\`bash
sudo apt update
sudo apt install ros-humble-desktop
source /opt/ros/humble/setup.bash
\`\`\`

## Simuler avec Gazebo et Rviz

\`\`\`bash
# Lancer TurtleBot3 en simulation
ros2 launch turtlebot3_gazebo turtlebot3_world.launch.py
ros2 launch turtlebot3_bringup rviz2.launch.py
\`\`\`

## Passer au matériel réel avec micro-ROS

micro-ROS permet de faire tourner ROS2 sur des microcontrôleurs (ESP32, STM32).

**Ressources :**
- Documentation officielle : docs.ros.org
- Formation : Robot Ignite Academy
- Communauté : ROS Discourse

**Conclusion :** Commencez par la simulation, puis passez au matériel. La courbe d'apprentissage vaut le coup.
    `
  },
  {
    id: 5,
    title: "Les avancées de l'IA générative : Claude, agents autonomes, et l'industrie 4.0",
    category: "Intelligence Artificielle",
    excerpt: "Découverte de Claude (Anthropic), des agents autonomes, et comment ces technologies transforment la maintenance prédictive et le support technique.",
    date: "Janvier 2025",
    readTime: "9 min",
    icon: Sparkles,
    gradient: "from-orange-500 to-red-500",
    tags: ["IA", "Claude", "Agents", "Industrie 4.0", "Maintenance Prédictive"],
    image: "/images/ia.png",
    content: `
# Les avancées de l'IA générative : Claude, agents autonomes, et l'industrie 4.0

L'IA générative n'est plus un gadget. En 2025, des modèles comme Claude d'Anthropic et les agents autonomes transforment l'industrie.

## Focus sur Claude (Anthropic)

- **Contexte long** : jusqu'à 200 000 tokens (manuels techniques complets)
- **Sécurité** : Constitutional AI
- **API accessible** : SDK Python/JS

**Applications industrielles :**
- Analyse de logs d'automates sur plusieurs mois
- Lecture de documentation technique
- Génération de code PLC (Ladder, ST)

## Les agents IA

Un agent IA est capable d'agir de manière autonome pour atteindre un objectif, en utilisant des outils.

**Architecture typique :**
- Perception (capteurs, logs)
- Raisonnement (LLM + planification)
- Outils (API, base SQL, scripts)
- Mémoire (historique)

## Applications dans l'industrie

### 1. Maintenance prédictive augmentée
- Surveillance continue des signaux
- Alerte dès que des anomalies sont détectées
- Proposition d'actions correctives

### 2. Support technique assisté
- Assistant vocal pour opérateurs
- Accès instantané aux manuels
- Génération pas à pas des instructions

### 3. Analyse de données non structurées
- Lecture des rapports d'intervention
- Extraction automatique des causes racines
- Alimentation d'une base de connaissances

## Exemple d'agent support PLC

\`\`\`python
agent = create_react_agent(
    llm=model,
    tools=[
        read_scada_logs,
        query_database,
        send_alert
    ]
)
result = agent.invoke("Analyse les alarmes des 24 dernières heures")
\`\`\`

## Mise en garde

Les LLM peuvent halluciner. Il faut :
- Valider les réponses
- Restreindre les actions critiques
- Garder l'humain dans la boucle

**Conclusion :** L'IA générative est un levier puissant pour l'industrie 4.0. Commencez petit, par exemple l'analyse de vos logs.
    `
  },
  {
    id: 6,
    title: "TechInov237 – Une vitrine technologique africaine",
    category: "Communauté & Transmission",
    excerpt: "TechInov237, une aventure collective pour démocratiser la technologie en Afrique : formations, création de contenu, et partage d'expériences.",
    date: "Décembre 2024",
    readTime: "10 min",
    icon: Users,
    gradient: "from-yellow-500 to-orange-500",
    tags: ["TechInov237", "Afrique", "Formation", "Robotique", "Électronique"],
    image: "/images/inov237.jpeg",
    content: `
# TechInov237 – Une vitrine technologique africaine

TechInov237 est une aventure collective créée avec deux camarades pour vulgariser la technologie en Afrique et dans le monde.

## Pourquoi TechInov237 ?

Le constat est simple : en Afrique, l'accès aux technologies avancées est difficile (coût du matériel, ressources pédagogiques rares). Pourtant, la soif d'apprendre est immense.

**Notre mission :**
- Partager nos expériences et projets
- Former les jeunes (étudiants, professionnels)
- Créer une communauté bienveillante

## Notre domaine de prédilection

- Robotique (ROS, Arduino)
- Systèmes embarqués (STM32, ESP32)
- Électronique (PCB, instrumentation)
- Automatisme (PLC Siemens, SCADA)
- Drones (PX4, ArduPilot)

## Ce que nous faisons concrètement

### 1. Des formations pour les jeunes

Ateliers présentiels et en ligne : Arduino, robotique, électronique. Chaque participant repart avec des compétences pratiques.

### 2. Une vitrine numérique

Nous produisons du contenu pour partager nos connaissances :
- Tutoriels vidéo
- Articles techniques
- Fichiers open source (schémas, code, designs 3D)

### 3. La création de contenu

Nous aimons la création de contenu sous toutes ses formes :
- Infographie
- Photogrammétrie
- Montage vidéo (DaVinci Resolve)
- Rédaction technique

### 4. Une communauté grandissante

Plusieurs centaines de membres sur nos réseaux (WhatsApp, Discord, GitHub). L'entraide est le maître-mot.

## Exemple concret : atelier robotique à Douala

Lors d'un week-end, nous avons réuni une quinzaine de participants. Au programme :
- Matin : introduction aux microcontrôleurs (Arduino)
- Montage d'un robot suiveur de ligne
- Après-midi : programmation (C++) et compétition

## Défis et apprentissages

- **Approvisionnement** : trouver des composants au Cameroun est un défi
- **Financement** : nous fonctionnons sur fonds propres
- **Temps** : projet du soir et du week-end

## Perspectives

- Développer notre chaîne YouTube
- Lancer des défis en ligne
- Créer un FabLab mobile
- Trouver des sponsors

## Comment participer ?

- Rejoignez notre communauté
- Contribuez au contenu (tutoriels, idées)
- Parrainez un étudiant
- Devenez mentor

**Conclusion :** TechInov237 prouve qu'avec de la volonté, on peut créer une communauté technologique dynamique même sans moyens colossaux. Le meilleur reste à venir.
    `
  }
];

const BlogInsights = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  const formatContent = (content) => {
    const lines = content.split('\n');
    const elements = [];
    let inCodeBlock = false;
    let codeContent = [];
    let codeLanguage = '';

    lines.forEach((line, i) => {
      // Détection des blocs de code
      if (line.trim().startsWith('```')) {
        if (!inCodeBlock) {
          inCodeBlock = true;
          codeLanguage = line.trim().substring(3);
          codeContent = [];
        } else {
          elements.push(
            <pre key={`code-${i}`} className="my-4 p-4 bg-slate-900 dark:bg-black rounded-lg overflow-x-auto">
              <code className={`text-sm font-mono text-green-400 language-${codeLanguage}`}>
                {codeContent.join('\n')}
              </code>
            </pre>
          );
          inCodeBlock = false;
          codeContent = [];
        }
        return;
      }

      if (inCodeBlock) {
        codeContent.push(line);
        return;
      }

      if (line.startsWith('# ')) {
        elements.push(<h1 key={i} className="text-2xl md:text-3xl font-bold text-black dark:text-white mt-8 mb-4">{line.substring(2)}</h1>);
      } else if (line.startsWith('## ')) {
        elements.push(<h2 key={i} className="text-xl md:text-2xl font-bold text-black dark:text-white mt-6 mb-3">{line.substring(3)}</h2>);
      } else if (line.startsWith('### ')) {
        elements.push(<h3 key={i} className="text-lg md:text-xl font-semibold text-black dark:text-white mt-5 mb-2">{line.substring(4)}</h3>);
      } else if (line.startsWith('- ')) {
        elements.push(<li key={i} className="text-slate-700 dark:text-gray-300 ml-6 mb-2 list-disc">{line.substring(2)}</li>);
      } else if (line.trim() === '') {
        elements.push(<div key={i} className="h-3"></div>);
      } else if (line.trim() !== '') {
        const parts = line.split(/(\*\*.*?\*\*)/g);
        if (parts.length > 1) {
          elements.push(
            <p key={i} className="text-slate-700 dark:text-gray-300 mb-3 leading-relaxed">
              {parts.map((part, idx) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                  return <strong key={idx} className="font-bold text-black dark:text-white">{part.slice(2, -2)}</strong>;
                }
                return part;
              })}
            </p>
          );
        } else {
          elements.push(<p key={i} className="text-slate-700 dark:text-gray-300 mb-3 leading-relaxed">{line}</p>);
        }
      }
    });

    return elements;
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="border-b-border-light dark:border-b-border-dark border-b-[1px]"
      >
        <div className="max-w-3xl mx-auto h-min p-4 md:p-[30px_48px_40px] md:border-l-[1px] md:border-r-[1px] md:border-dashed md:border-l-border-light md:border-r-border-light dark:md:border-l-border-dark dark:md:border-r-border-dark">
          
          {!selectedPost ? (
            <>
              <div className="mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block mb-3"
                >
                  <span className="px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 rounded-full">
                    Blog & Insights
                  </span>
                </motion.div>
                
                <h1 className="text-black dark:text-white text-xl sm:text-3xl md:text-4xl font-semibold leading-tight max-w-md mt-4 mb-3">
                  Automatisation, Robotique & Tech
                </h1>
                
                <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base max-w-md">
                  Retours d'expérience, tutoriels techniques et réflexions.
                </p>
              </div>

              <div className="space-y-4 my-7">
                {blogPosts.map((post, index) => {
                  const Icon = post.icon;
                  
                  return (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      onHoverStart={() => setHoveredId(post.id)}
                      onHoverEnd={() => setHoveredId(null)}
                      onClick={() => setSelectedPost(post)}
                      className="group relative overflow-hidden rounded-xl border border-border-light dark:border-border-dark bg-white dark:bg-bg-dark transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${post.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                      
                      {post.image && (
                        <div className="w-full h-48 overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}
                      
                      <div className="relative z-10 p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-3">
                              <div className={`p-2 rounded-lg bg-gradient-to-r ${post.gradient} bg-opacity-10`}>
                                <Icon className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                              </div>
                              <span className="text-xs font-medium text-slate-500 dark:text-gray-500 uppercase tracking-wide">
                                {post.category}
                              </span>
                            </div>
                            
                            <h3 className="text-lg font-bold text-black dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {post.title}
                            </h3>
                            
                            <p className="text-sm text-slate-600 dark:text-gray-400 mb-4 line-clamp-2">
                              {post.excerpt}
                            </p>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                              {post.tags.slice(0, 4).map((tag, i) => (
                                <span key={i} className="px-2 py-1 text-xs font-medium text-slate-600 dark:text-gray-400 bg-slate-100 dark:bg-slate-800 rounded">
                                  {tag}
                                </span>
                              ))}
                            </div>
                            
                            <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-gray-500">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                <span>{post.date}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                          </div>
                          
                          <motion.div
                            animate={{ x: hoveredId === post.id ? 5 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex-shrink-0"
                          >
                            <ArrowRight className="w-5 h-5 text-slate-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                          </motion.div>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="flex items-center gap-2 text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-6 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm font-medium">Retour aux articles</span>
              </button>

              {selectedPost.image && (
                <div className="w-full overflow-hidden rounded-lg shadow-lg mb-6">
                  <img 
                    src={selectedPost.image} 
                    alt={selectedPost.title}
                    className="w-full object-cover max-h-[300px]"
                  />
                </div>
              )}

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  {React.createElement(selectedPost.icon, { className: "w-6 h-6 text-slate-700 dark:text-slate-300" })}
                  <span className="text-sm font-medium text-slate-500 dark:text-gray-500 uppercase tracking-wide">
                    {selectedPost.category}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white mb-4 leading-tight">
                  {selectedPost.title}
                </h1>

                <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{selectedPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{selectedPost.readTime}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedPost.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-sm font-medium text-slate-600 dark:text-gray-400 bg-slate-100 dark:bg-slate-800 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="prose prose-slate dark:prose-invert max-w-none">
                <div className={`w-full h-1 bg-gradient-to-r ${selectedPost.gradient} rounded-full mb-8`} />
                {formatContent(selectedPost.content)}
              </div>

              <div className="mt-12 pt-8 border-t border-border-light dark:border-border-dark">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-950/50 transition-all duration-300"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Retour aux articles
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BlogInsights;