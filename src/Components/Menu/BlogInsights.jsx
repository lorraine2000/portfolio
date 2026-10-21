import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles,
  Tv, 
  Cloud,
  Database,
  Shield,
  Calendar, 
  Clock, 
  ArrowRight, 
  ArrowLeft,
  Search,
  BookOpen,
  Check,
  Copy
} from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Les avancées de l'IA générative : Claude, agents autonomes et automatisation logicielle",
    category: "IA & Automatisation",
    excerpt: "Comment les LLMs de nouvelle génération (Claude 3.5 Sonnet), le Model Context Protocol (MCP) et les agents autonomes transforment le cycle de vie du développement logiciel et automatisent les tâches techniques complexes.",
    date: "Octobre 2025",
    readTime: "10 min",
    icon: Sparkles,
    gradient: "from-blue-600 to-indigo-600",
    tags: ["IA Générative", "Claude 3.5", "Agents Autonomes", "MCP", "Automatisation", "DevOps"],
    image: "/images/ia.png",
    content: `
# Les avancées de l'IA générative : Claude, agents autonomes et automatisation logicielle

L'intelligence artificielle générative a franchi un cap décisif : nous sommes passés des simples chatbots conversationnels à des **agents autonomes capables de raisonner, d'interagir avec des outils réels et d'automatiser des processus d'ingénierie logicielle de bout en bout**.

Dans cet article, je partage mon analyse et mon retour d'expérience sur l'utilisation des modèles d'Anthropic (**Claude 3.5 Sonnet**), le standard émergent **Model Context Protocol (MCP)** et la mise en œuvre d'agents pour démultiplier l'efficacité des équipes de développement.

---

## 1. Claude 3.5 Sonnet : Le bond qualitatif en raisonnement et code

Parmi les modèles actuels, **Claude 3.5 Sonnet** d'Anthropic s'est imposé comme une référence majeure pour les ingénieurs logiciels :
- **Compréhension architecturale globale** : Avec une fenêtre de contexte de 200 000 tokens, le modèle est capable d'analyser un dépôt de code entier, d'identifier les dépendances croisées et de proposer des refactorisations cohérentes.
- **Rigueur syntaxique et logique** : Génération de code Java (Spring Boot), TypeScript ou configurations d'infrastructure (Terraform, Kubernetes) avec un taux d'hallucination remarquablement bas.
- **Approche *Constitutional AI*** : Respect strict des contraintes de sécurité et des garde-fous imposés aux systèmes d'entreprise.

---

## 2. Des LLMs aux Agents Autonomes : Le pattern ReAct

Un modèle de langage seul génère du texte ; un **agent autonome**, en revanche, est doté de la capacité de percevoir son environnement, de planifier des actions et d'exécuter des outils externes via le pattern **ReAct (Raisonnement + Action)**.

### Architecture d'un agent d'automatisation :
1. **Perception** : L'agent reçoit une consigne (ex: "Diagnostiquer l'erreur 500 sur le microservice de paiement et proposer un fix").
2. **Raisonnement (Thinking)** : Le LLM décompose la consigne en sous-tâches ordonnées.
3. **Appel d'outils (Tool Calling)** : L'agent interroge des APIs ou exécute des commandes via des connecteurs sécurisés (logs CloudWatch, requêtes SQL, exécution de tests JUnit).
4. **Observation & Boucle d'ajustement** : L'agent analyse le retour de l'outil et corrige sa trajectoire jusqu'à l'atteinte du résultat.

\`\`\`python
# Exemple conceptuel d'agent ReAct pour le diagnostic automatique
from langchain_anthropic import ChatAnthropic
from langchain.agents import create_tool_calling_agent, AgentExecutor
from langchain.tools import tool

@tool
def fetch_cloudwatch_logs(service_name: str, limit: int = 50) -> str:
    """Interroge les logs d'un microservice pour extraire les stacktraces récentes."""
    # Appel vers l'API AWS CloudWatch Logs
    return f"Logs extraits pour {service_name}: NullPointerException ligne 42"

@tool
def trigger_junit_tests(branch_name: str) -> str:
    """Lance la suite de tests automatisée sur une branche Git."""
    return "BUILD SUCCESS: 142 tests passes, 0 failures"

llm = ChatAnthropic(model="claude-3-5-sonnet-20241022", temperature=0)
tools = [fetch_cloudwatch_logs, trigger_junit_tests]
agent = create_tool_calling_agent(llm, tools, prompt)
executor = AgentExecutor(agent=agent, tools=tools, verbose=True)
\`\`\`

---

## 3. Le Model Context Protocol (MCP) : Révolutionner l'interconnexion

L'un des freins majeurs aux agents était la multiplication d'intégrations API ad hoc. L'émergence du **Model Context Protocol (MCP)** standardise la façon dont un modèle accède aux ressources de l'entreprise :
- **Serveurs MCP locaux et distants** : Connexion unifiée à GitHub, GitLab, bases PostgreSQL, clusters Kubernetes ou documentation Notion.
- **Sécurité et granularité** : Chaque action requiert une permission explicite (lecture seule ou écriture conditionnelle).

---

## 4. Cas d'usage concrets en entreprise

L'automatisation par agents IA apporte une valeur immédiate sur plusieurs maillons de la chaîne logicielle :
- **Génération automatique de tests unitaires et de non-régression** : Analyse des méthodes critiques et écriture de tests Mockito/JUnit couvrant les cas limites (*edge cases*).
- **Triage et diagnostic d'incidents de production** : Regroupement automatique des alertes Prometheus/Sentry, corrélation avec les derniers déploiements Git, et proposition de correctifs pré-validés.
- **Revue de code DevSecOps** : Détection en amont des vulnérabilités OWASP, des fuites de mémoire ou des anti-patterns d'architecture avant la validation de la Pull Request.

---

## 5. Bonnes pratiques et vigilance

L'intégration d'agents autonomes exige rigueur et gouvernance :
- **Garder l'humain dans la boucle (*Human-in-the-loop*)** : Aucune mise en production ou modification de schéma de base de données ne doit être exécutée sans validation humaine.
- **Isolation des environnements** : Exécuter les agents dans des conteneurs sandboxés avec des droits moindres (*least privilege*).
- **Observabilité des décisions** : Logger chaque étape de raisonnement de l'agent pour auditer les décisions prises.

**Conclusion :** L'IA générative et les agents autonomes ne remplacent pas les ingénieurs logiciels : ils amplifient leur impact en éliminant les tâches répétitives pour leur permettre de se concentrer sur l'architecture, la résilience et la valeur métier.
    `
  },
  {
    id: 2,
    title: "Réalité Virtuelle et Réalité Augmentée – Blender, Unity et Meta Quest 3",
    category: "VR/AR & 3D",
    excerpt: "Conception d'un espace interactif en immersion : modélisation 3D sous Blender, développement des interactions physiques en C# sous Unity et déploiement optimisé sur casque autonome Meta Quest 3.",
    date: "Août 2025",
    readTime: "12 min",
    icon: Tv,
    gradient: "from-purple-600 to-indigo-600",
    tags: ["VR", "Unity", "Blender", "Meta Quest 3", "C#", "Physique 3D"],
    image: "/images/VRARR.png",
    content: `
# Réalité Virtuelle et Réalité Augmentée – Blender, Unity et Meta Quest 3

La réalité virtuelle (VR) et la réalité augmentée (AR) ouvrent des perspectives majeures pour la simulation, la formation immersive et les interfaces 3D de nouvelle génération. Dans cet article, je partage mon retour d'expérience complet sur la conception d'un espace virtuel interactif, de la modélisation 3D au déploiement sur casque autonome.

---

## 1. La vision et les objectifs du projet

L'objectif était de créer un environnement 3D immersif et fluide, exécuté directement sur le processeur embarqué du casque **Meta Quest 3**, sans nécessiter de PC de calcul externe.

**Les défis techniques clés :**
- Concevoir des assets 3D optimisés en nombre de polygones pour respecter le budget de rendu mobile.
- Programmer un système physique réaliste pour la saisie et la manipulation d'objets en temps réel.
- Maintenir un taux de rafraîchissement stable de **72 images par seconde** pour éviter tout phénomène de cinétose (*motion sickness*).

---

## 2. Modélisation 3D sous Blender

Pour créer les objets de l'environnement virtuel, j'ai utilisé **Blender** :
- **Low-poly modeling** : Conception d'un bureau complet, de fauteuils ergonomiques et d'équipements informatiques tout en limitant le décompte de polygones.
- **Matériaux PBR (Physically Based Rendering)** : Textures optimisées (Albedo, Normal Map, Roughness) pour reproduire fidèlement l'aspect du bois, du plastique et des surfaces métalliques.
- **Exportation optimisée** : Format FBX avec hiérarchie propre des pivots pour faciliter l'ancrage des mains dans le moteur de jeu.

---

## 3. Développement des interactions sous Unity (C#)

L'interactivité a été développée sous **Unity** en exploitant le standard **OpenXR** et le package **XR Interaction Toolkit**.

### Fonctionnalités implémentées :
1. **Saisie d'objets avec vélocité naturelle** : Lors du relâchement d'un objet, sa vitesse et sa trajectoire angulaire sont calculées pour une physique réaliste.
2. **Déplacement par téléportation parabolique** : Pour naviguer dans une pièce plus grande que l'espace physique réel.
3. **Retours haptiques personnalisés** : Vibration dosée des contrôleurs Touch Plus à l'impact et à la saisie.

\`\`\`csharp
using UnityEngine;

public class GrabObject : MonoBehaviour
{
    private bool isGrabbed = false;
    private Transform controller;
    private Rigidbody rb;

    void Awake()
    {
        rb = GetComponent<Rigidbody>();
    }

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
        rb.isKinematic = true;
    }

    public void OnRelease(Vector3 releaseVelocity, Vector3 releaseAngularVelocity)
    {
        isGrabbed = false;
        controller = null;
        rb.isKinematic = false;
        rb.linearVelocity = releaseVelocity;
        rb.angularVelocity = releaseAngularVelocity;
    }
}
\`\`\`

---

## 4. Déploiement et optimisations sur Meta Quest 3

Le Meta Quest 3 embarque le chipset Snapdragon XR2 Gen 2 sous Android. Le déploiement s'effectue via l'**Android Debug Bridge (ADB)**.

### Optimisations indispensables :
- **Occlusion Culling** : Masquer le calcul des objets situés hors du champ de vision de l'utilisateur.
- **Texture Compression ASTC** : Réduction de l'empreinte mémoire vidéo sans perte de qualité perceptible.
- **Single Pass Instanced Rendering** : Rendu des deux yeux en une seule passe de calcul GPU.

**Conclusion :** Cette réalisation démontre la polyvalence requise entre la modélisation 3D, le développement orienté objet rigoureux en C# et l'optimisation poussée des ressources mémoire et processeur sur architecture mobile.
    `
  },
  {
    id: 3,
    title: "Architecture Cloud sur AWS : Déployer des microservices avec Kubernetes (EKS) et Terraform",
    category: "Cloud & DevOps",
    excerpt: "Guide d'architecture Cloud : conteneurisation multi-stage Docker, provisionnement d'infrastructure as Code (IaC) avec Terraform et orchestration sur un cluster Amazon EKS hautement disponible.",
    date: "Juin 2025",
    readTime: "11 min",
    icon: Cloud,
    gradient: "from-sky-600 to-blue-600",
    tags: ["AWS", "Kubernetes", "Terraform", "EKS", "Docker", "IaC"],
    image: "/images/blog_etl.png",
    content: `
# Architecture Cloud sur AWS : Déployer des microservices avec Kubernetes (EKS) et Terraform

Dans les architectures logicielles modernes, la robustesse d'une application dépend autant de son infrastructure que de son code source. L'association d'**Amazon Web Services (AWS)**, de **Kubernetes (Amazon EKS)** et de l'**Infrastructure as Code (Terraform)** constitue le standard de référence pour les systèmes critiques nécessitant haute disponibilité et scalabilité.

---

## 1. Pourquoi le choix d'Amazon EKS ?

Gérer son propre cluster Kubernetes sur des machines virtuelles EC2 brutes est complexe et risqué. **Amazon EKS (Elastic Kubernetes Service)** délègue à AWS la gestion du *Control Plane* (API Server, etcd) avec une garantie de disponibilité de 99,95 % :
- Déploiement multi-AZ automatique du plan de contrôle.
- Intégration native avec IAM pour la gestion fine des accès aux pods (IRSA - IAM Roles for Service Accounts).
- Autoscaling horizontal (HPA) et gestion dynamique des nœuds avec Karpenter ou Cluster Autoscaler.

---

## 2. Infrastructure as Code avec Terraform

L'ensemble de l'infrastructure est décrit de manière déclarative pour garantir la reproductibilité totale des environnements (Développement, Staging, Production).

\`\`\`hcl
# Extrait Terraform : Déclaration du cluster Amazon EKS
module "eks" {
  source  = "terraform-aws-modules/eks/aws"
  version = "~> 20.0"

  cluster_name    = "production-cloud-cluster"
  cluster_version = "1.30"

  cluster_endpoint_public_access = true

  vpc_id                   = module.vpc.vpc_id
  subnet_ids               = module.vpc.private_subnets
  control_plane_subnet_ids = module.vpc.intra_subnets

  eks_managed_node_groups = {
    general_nodes = {
      instance_types = ["t3.medium"]
      min_size     = 2
      max_size     = 5
      desired_size = 2
    }
  }

  tags = {
    Environment = "production"
    ManagedBy   = "Terraform"
  }
}
\`\`\`

---

## 3. Conteneurisation optimisée avec Docker

Pour garantir la sécurité et la légèreté des images de conteneurs, nous utilisons le pattern **multi-stage build** :
- Étape 1 (*builder*) : Compilation du projet Java avec Maven sur une image complète.
- Étape 2 (*runner*) : Image d'exécution basée sur une image minimale **Distroless** ou **Alpine JRE**, sans compilateur ni utilitaires superflus, réduisant considérablement la surface d'attaque.
- Exécution obligatoire avec un utilisateur non-root (*securityContext*).

---

## 4. Déploiement Kubernetes et Ingress Controller

Le trafic extérieur est distribué via un **AWS Load Balancer Controller** configurant dynamiquement un Application Load Balancer (ALB) avec terminaison TLS et certificats gérés par AWS Certificate Manager.

\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: backend-service
  namespace: production
spec:
  replicas: 3
  selector:
    matchLabels:
      app: backend-service
  template:
    metadata:
      labels:
        app: backend-service
    spec:
      containers:
      - name: backend
        image: 123456789.dkr.ecr.eu-west-3.amazonaws.com/backend:v1.2.0
        ports:
        - containerPort: 8080
        resources:
          limits:
            cpu: "500m"
            memory: "512Mi"
          requests:
            cpu: "200m"
            memory: "256Mi"
        livenessProbe:
          httpGet:
            path: /actuator/health/liveness
            port: 8080
          initialDelaySeconds: 30
          periodSeconds: 10
\`\`\`

---

## 5. Monitoring & Observabilité

Un cluster de production requiert une visibilité continue :
- **Prometheus & Grafana** : Collecte des métriques d'infrastructure (CPU, mémoire, saturation réseau) et métriques applicatives (temps de réponse, débit).
- **Amazon CloudWatch Container Insights** : Centralisation des logs applicatifs avec rétention paramétrable et alertes automatiques en cas de dépassement de seuil d'erreurs.

**Conclusion :** Cette architecture offre une fondation Cloud résiliente capable d'absorber des pics de trafic tout en garantissant des déploiements sans interruption de service (*zero-downtime rolling updates*).
    `
  },
  {
    id: 4,
    title: "Microservices distribués avec Java 21, Spring Boot 3 et Apache Kafka",
    category: "Architecture & Backend",
    excerpt: "Comment concevoir des systèmes backend distribués traitant des millions de transactions : architecture orientée événements (EDA), pattern Transactional Outbox et patterns de tolérance aux pannes.",
    date: "Avril 2025",
    readTime: "10 min",
    icon: Database,
    gradient: "from-emerald-600 to-teal-600",
    tags: ["Java 21", "Spring Boot 3", "Apache Kafka", "Event-Driven", "Resilience4j", "Clean Architecture"],
    image: "/images/blog_python.png",
    content: `
# Microservices distribués avec Java 21, Spring Boot 3 et Apache Kafka

Dans les secteurs exigeants comme la finance ou l'e-commerce (comme lors de mes expériences sur des applications traitant des volumes massifs de données à la Société Générale), les architectures monolithiques atteignent rapidement leurs limites. 

Pour garantir une disponibilité maximale et une mise à l'échelle horizontale, l'association de **Java 21**, **Spring Boot 3** et **Apache Kafka** s'impose comme le standard pour les architectures événementielles (*Event-Driven Architecture*).

---

## 1. Découplage asynchrone : Pourquoi Kafka plutôt que REST ?

Dans une architecture par appels REST synchrones, la défaillance d'un microservice en aval provoque des blocages en cascade et dégrade l'ensemble du système.

**Apache Kafka apporte :**
- **Un découplage temporel total** : Le producteur publie un événement sans attendre que les consommateurs soient disponibles.
- **Un débit massif** : Traitement de dizaines de milliers d'événements par seconde grâce au partitionnement et au stockage séquentiel sur disque.
- **Une rejouabilité des messages** : Possibilité pour un consommateur de retraiter l'historique des événements en cas de reprise sur incident.

---

## 2. Le pattern Transactional Outbox

Le défi majeur des architectures distribuées réside dans la cohérence : comment mettre à jour une base de données relationnelle ET publier un événement Kafka dans une même opération sans risquer d'incohérence ?

La solution recommandée est le **Transactional Outbox Pattern** :
1. Dans la même transaction SQL locale, la commande métier est enregistrée ainsi qu'une ligne dans une table \`outbox_events\`.
2. Un processus asynchrone (ou un connecteur Debezium via CDC) lit cette table et publie les événements dans le topic Kafka dédié.
3. Aucune perte de données n'est possible, même en cas de crash réseau immédiat.

\`\`\`java
@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private final OutboxRepository outboxRepository;

    @Transactional
    public Order createOrder(OrderRequest request) {
        // 1. Sauvegarde métier
        Order order = orderRepository.save(new Order(request));

        // 2. Enregistrement dans la table outbox (même transaction)
        OutboxEvent event = OutboxEvent.builder()
            .aggregateType("ORDER")
            .aggregateId(order.getId().toString())
            .eventType("ORDER_CREATED")
            .payload(JsonUtils.toJson(order))
            .createdAt(Instant.now())
            .build();
            
        outboxRepository.save(event);
        return order;
    }
}
\`\`\`

---

## 3. Tolérance aux pannes avec Resilience4j

Dans Spring Boot 3, la bibliothèque **Resilience4j** permet de sécuriser les interactions externes :
- **Circuit Breaker** : Détecte un taux d'erreur anormal vers un service tiers et ouvre le circuit pour éviter de saturer le système.
- **Retry avec Backoff exponentiel** : Réessaie automatiquement les requêtes en cas d'erreurs réseau transitoires.
- **Dead-Letter Topic (DLT)** : Si un message Kafka échoue à répétition après plusieurs tentatives, il est routé vers une file d'attente d'erreur pour analyse manuelle, sans bloquer le flux principal.

---

## 4. Tests d'intégration fiables avec Testcontainers

Pour valider le bon fonctionnement de notre écosystème sans dépendre d'environnements distants instables, nous exploitons **Testcontainers** :
- Démarrage automatique d'un vrai conteneur Docker PostgreSQL et Kafka lors de l'exécution des tests JUnit 5.
- Validation des contrats d'événements et des comportements de rollback en conditions réelles.

**Conclusion :** Une architecture événementielle bien conçue transforme la complexité distribuée en un système résilient, hautement disponible et prêt pour une croissance d'échelle soutenue.
    `
  },
  {
    id: 5,
    title: "Pipeline DevSecOps moderne : Automatiser la qualité et la sécurité avec GitHub Actions, SonarQube et Trivy",
    category: "Cloud & DevOps",
    excerpt: "Intégrer la sécurité dès la première ligne de code (Shift-Left) : mise en place d'un pipeline CI/CD automatisé avec analyse statique de code (SAST), audit des dépendances et scan de conteneurs.",
    date: "Février 2025",
    readTime: "9 min",
    icon: Shield,
    gradient: "from-slate-700 to-slate-900",
    tags: ["DevSecOps", "CI/CD", "GitHub Actions", "SonarQube", "Trivy", "Sécurité"],
    image: "/images/blog_Mistral.png",
    content: `
# Pipeline DevSecOps moderne : Automatiser la qualité et la sécurité avec GitHub Actions, SonarQube et Trivy

Corriger une vulnérabilité de sécurité ou un bug critique en environnement de production coûte jusqu'à 30 fois plus cher que lors de la phase de développement. 

Le mouvement **DevSecOps** et le principe du **Shift-Left** consistent à intégrer les vérifications de qualité, de conformité et de sécurité au plus tôt dans la boucle de développement, directement dans les pipelines d'intégration continue (**CI/CD**).

---

## 1. Les 4 piliers d'un pipeline sécurisé

Un pipeline moderne ne se limite pas à compiler et packager : il contrôle chaque strate de l'application :
1. **SAST (Static Application Security Testing)** : Analyse du code source sans l'exécuter pour détecter les failles (injections SQL, secrets hardcodés, mauvaises pratiques).
2. **SCA (Software Composition Analysis)** : Détection des vulnérabilités connues (CVE) dans les librairies tierces et dépendances Maven / npm.
3. **Container Scanning** : Audit de l'image Docker finale (OS de base, paquets système).
4. **Quality Gates** : Blocage automatique du merge de la Pull Request si le score de couverture de tests ou de sécurité est insuffisant.

---

## 2. Le workflow CI/CD complet avec GitHub Actions

Voici un exemple de pipeline industriel exécuté à chaque Pull Request :

\`\`\`yaml
name: CI/CD Pipeline & DevSecOps Gate

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up JDK 21
        uses: actions/setup-java@v4
        with:
          java-version: '21'
          distribution: 'temurin'
          cache: maven

      - name: Run unit & integration tests
        run: mvn clean verify

      # Analyse statique avec SonarQube
      - name: SonarQube Quality Gate Scan
        uses: sonarsource/sonarqube-scan-action@master
        env:
          SONAR_TOKEN: \${{ secrets.SONAR_TOKEN }}
          SONAR_HOST_URL: \${{ secrets.SONAR_HOST_URL }}

      # Build du conteneur Docker
      - name: Build Docker image
        run: docker build -t my-app:\${{ github.sha }} .

      # Scan de vulnérabilités avec Trivy
      - name: Run Trivy Vulnerability Scanner
        uses: aquasecurity/trivy-action@master
        with:
          image-ref: 'my-app:\${{ github.sha }}'
          format: 'table'
          exit-code: '1' # Échoue si une vulnérabilité CRITICAL est détectée
          ignore-unfixed: true
          severity: 'CRITICAL,HIGH'
\`\`\`

---

## 3. Maîtriser la Quality Gate avec SonarQube

Pour maintenir un code maintenable et pérenne sur le long terme :
- Seuil de couverture de code minimum exigé sur le nouveau code (ex: 80 %).
- Zéro *Security Hotspot* non vérifié.
- Règle stricte : tout échec de la Quality Gate bloque le merge de la Pull Request, garantissant qu'aucune régression de qualité ne franchit le cap de la branche principale.

---

## 4. Retours d'expérience et bénéfices observés

L'adoption de ce standard automatisé transforme la sérénité des équipes techniques :
- **Confiance absolue dans les déploiements** : Les déploiements en fin de journée ou le vendredi deviennent possibles car les tests et scans sont systématiques.
- **Réduction drastique des failles de sécurité** : Les dépendances obsolètes sont identifiées avant même d'arriver en production.
- **Délai de mise sur le marché accéléré** : Moins de phases manuelles d'audit avant livraison.

**Conclusion :** La sécurité n'est plus un goulot d'étranglement final mais un composant automatisé et transparent au service de la vélocité des développeurs.
    `
  }
];

const categories = [
  "Tous",
  "IA & Automatisation",
  "Cloud & DevOps",
  "Architecture & Backend",
  "VR/AR & 3D"
];

const BlogInsights = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedCodeIndex, setCopiedCodeIndex] = useState(null);

  // Filtrage intelligent par catégorie et recherche
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "Tous" || post.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const copyCode = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedCodeIndex(idx);
    setTimeout(() => setCopiedCodeIndex(null), 2000);
  };

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
          codeLanguage = line.trim().substring(3) || 'text';
          codeContent = [];
        } else {
          const rawCode = codeContent.join('\n');
          const blockIdx = i;
          elements.push(
            <div key={`code-block-${blockIdx}`} className="my-5 rounded-xl overflow-hidden border border-slate-700/60 bg-slate-950 shadow-md">
              <div className="bg-slate-900/90 px-4 py-2 flex items-center justify-between text-xs text-slate-300 font-mono border-b border-slate-800">
                <span className="uppercase tracking-wider font-semibold text-slate-400">{codeLanguage}</span>
                <button
                  onClick={() => copyCode(rawCode, blockIdx)}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                  title="Copier le code"
                >
                  {copiedCodeIndex === blockIdx ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copié !</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copier</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="p-4 overflow-x-auto text-xs sm:text-sm font-mono text-emerald-300 leading-relaxed">
                <code>{rawCode}</code>
              </pre>
            </div>
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
        elements.push(<h1 key={i} className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-8 mb-4">{line.substring(2)}</h1>);
      } else if (line.startsWith('## ')) {
        elements.push(<h2 key={i} className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-3 border-b border-slate-200 dark:border-border-dark pb-2">{line.substring(3)}</h2>);
      } else if (line.startsWith('### ')) {
        elements.push(<h3 key={i} className="text-lg md:text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-2">{line.substring(4)}</h3>);
      } else if (line.startsWith('> ')) {
        elements.push(
          <blockquote key={i} className="my-4 border-l-4 border-blue-500 pl-4 py-2 italic text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-button-bg-dark/40 rounded-r">
            {line.substring(2)}
          </blockquote>
        );
      } else if (line.startsWith('- ') || line.startsWith('* ')) {
        elements.push(<li key={i} className="text-slate-700 dark:text-gray-300 ml-6 mb-2 list-disc text-sm sm:text-base leading-relaxed">{line.substring(2)}</li>);
      } else if (/^\d+\.\s/.test(line)) {
        elements.push(<li key={i} className="text-slate-700 dark:text-gray-300 ml-6 mb-2 list-decimal text-sm sm:text-base leading-relaxed">{line.replace(/^\d+\.\s/, '')}</li>);
      } else if (line.trim() === '---') {
        elements.push(<hr key={i} className="my-6 border-slate-200 dark:border-border-dark" />);
      } else if (line.trim() === '') {
        elements.push(<div key={i} className="h-3"></div>);
      } else if (line.trim() !== '') {
        const parts = line.split(/(\*\*.*?\*\*)/g);
        if (parts.length > 1) {
          elements.push(
            <p key={i} className="text-slate-700 dark:text-gray-300 mb-3 text-sm sm:text-base leading-relaxed">
              {parts.map((part, idx) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                  return <strong key={idx} className="font-semibold text-slate-900 dark:text-white">{part.slice(2, -2)}</strong>;
                }
                return part;
              })}
            </p>
          );
        } else {
          elements.push(<p key={i} className="text-slate-700 dark:text-gray-300 mb-3 text-sm sm:text-base leading-relaxed">{line}</p>);
        }
      }
    });

    return elements;
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="border-b-border-light dark:border-b-border-dark border-b-[1px]"
      >
        <div className="max-w-3xl mx-auto h-min p-4 md:p-[30px_48px_40px] md:border-l-[1px] md:border-r-[1px] md:border-dashed md:border-l-border-light md:border-r-border-light dark:md:border-l-border-dark dark:md:border-r-border-dark">
          
          {!selectedPost ? (
            <>
              {/* Header de la section adapté au profil informatique */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 rounded-full mb-3 border border-blue-200/50 dark:border-blue-900/50">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Blog & Tech Insights</span>
                </div>
                
                <h1 className="text-black dark:text-white text-xl sm:text-3xl md:text-4xl font-semibold leading-tight max-w-lg mt-1 mb-3">
                  Cloud, DevOps, IA & Ingénierie Logicielle
                </h1>
                
                <p className="text-slate-600 dark:text-gray-dark text-sm sm:text-base max-w-xl leading-relaxed">
                  Analyses techniques approfondies, architectures résilientes, automatisation par les agents IA et retours d'expérience concrets.
                </p>
              </div>

              {/* Barre de recherche & Filtres par catégorie */}
              <div className="space-y-3 mb-6">
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Rechercher un article, une techno (ex: Claude, Kubernetes, Kafka, VR, Docker...)"
                    className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 dark:border-border-dark bg-white dark:bg-bg-dark text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                    >
                      Effacer
                    </button>
                  )}
                </div>

                {/* Filtres par catégories */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        selectedCategory === cat
                          ? "bg-slate-900 text-white dark:bg-white dark:text-black shadow-sm"
                          : "bg-slate-100 dark:bg-button-bg-dark text-slate-600 dark:text-gray-dark hover:bg-slate-200 dark:hover:bg-button-hover-dark"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Liste des articles */}
              {filteredPosts.length === 0 ? (
                <div className="py-12 text-center border border-dashed border-slate-300 dark:border-border-dark rounded-xl my-6">
                  <p className="text-slate-500 dark:text-gray-dark text-sm">
                    Aucun article ne correspond à votre recherche "{searchQuery}".
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("Tous");
                    }}
                    className="mt-3 text-xs text-blue-600 dark:text-blue-400 underline font-medium"
                  >
                    Réinitialiser les filtres
                  </button>
                </div>
              ) : (
                <div className="space-y-4 my-6">
                  {filteredPosts.map((post, index) => {
                    const Icon = post.icon;
                    
                    return (
                      <motion.article
                        key={post.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.06 }}
                        onHoverStart={() => setHoveredId(post.id)}
                        onHoverEnd={() => setHoveredId(null)}
                        onClick={() => setSelectedPost(post)}
                        className="group relative overflow-hidden rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-bg-dark transition-all duration-200 hover:border-slate-400 dark:hover:border-slate-500 hover:shadow-md cursor-pointer"
                      >
                        {post.image && (
                          <div className="w-full h-44 overflow-hidden bg-slate-100 dark:bg-slate-900">
                            <img 
                              src={post.image} 
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                            />
                          </div>
                        )}
                        
                        <div className="relative z-10 p-5 sm:p-6">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2.5 mb-2.5">
                                <div className="p-1.5 rounded-md bg-slate-100 dark:bg-button-bg-dark border border-slate-200/60 dark:border-border-dark">
                                  <Icon className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                                </div>
                                <span className="text-xs font-semibold text-blue-700 dark:text-blue-400 uppercase tracking-wide">
                                  {post.category}
                                </span>
                              </div>
                              
                              <h3 className="text-base sm:text-lg font-bold text-black dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                                {post.title}
                              </h3>
                              
                              <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-dark mb-3.5 line-clamp-2 leading-relaxed">
                                {post.excerpt}
                              </p>
                              
                              <div className="flex flex-wrap gap-1.5 mb-3.5">
                                {post.tags.slice(0, 5).map((tag, i) => (
                                  <span key={i} className="px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:text-gray-dark bg-slate-100 dark:bg-button-bg-dark/80 rounded">
                                    #{tag}
                                  </span>
                                ))}
                              </div>
                              
                              <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-gray-dark pt-2 border-t border-slate-100 dark:border-border-dark/60">
                                <div className="flex items-center gap-1.5">
                                  <Calendar className="w-3.5 h-3.5" />
                                  <span>{post.date}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                  <Clock className="w-3.5 h-3.5" />
                                  <span>{post.readTime}</span>
                                </div>
                              </div>
                            </div>
                            
                            <motion.div
                              animate={{ x: hoveredId === post.id ? 4 : 0 }}
                              transition={{ duration: 0.2 }}
                              className="flex-shrink-0 pt-1"
                            >
                              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                            </motion.div>
                          </div>
                        </div>
                      </motion.article>
                    );
                  })}
                </div>
              )}
            </>
          ) : (
            /* Vue lecteur détaillée de l'article */
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="inline-flex items-center gap-2 text-slate-600 dark:text-gray-dark hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-6 group text-xs sm:text-sm font-medium"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Retour aux articles</span>
              </button>

              {selectedPost.image && (
                <div className="w-full overflow-hidden rounded-xl shadow-sm mb-6 max-h-[320px] bg-slate-100 dark:bg-slate-900">
                  <img 
                    src={selectedPost.image} 
                    alt={selectedPost.title}
                    className="w-full object-cover max-h-[320px]"
                  />
                </div>
              )}

              <div className="mb-6">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="p-1.5 rounded-md bg-slate-100 dark:bg-button-bg-dark border border-slate-200/60 dark:border-border-dark">
                    {React.createElement(selectedPost.icon, { className: "w-4 h-4 text-slate-700 dark:text-slate-300" })}
                  </div>
                  <span className="text-xs font-semibold text-blue-700 dark:text-blue-400 uppercase tracking-wide">
                    {selectedPost.category}
                  </span>
                </div>

                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-black dark:text-white mb-3 leading-tight">
                  {selectedPost.title}
                </h1>

                <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-gray-dark mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>{selectedPost.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span>Temps de lecture : {selectedPost.readTime}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200 dark:border-border-dark">
                  {selectedPost.tags.map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-gray-dark bg-slate-100 dark:bg-button-bg-dark rounded-md">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contenu formaté de l'article */}
              <div className="mt-8 border-t border-slate-200 dark:border-border-dark pt-6">
                {formatContent(selectedPost.content)}
              </div>

              {/* Bouton de retour en bas d'article */}
              <div className="mt-12 pt-6 border-t border-slate-200 dark:border-border-dark flex items-center justify-between">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-slate-200 rounded-lg transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Retour aux articles</span>
                </button>

                <a
                  href="/contact"
                  className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Discuter de ce sujet avec Lorraine →
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BlogInsights;