import { BrainCircuit, Cpu, Radar, type LucideIcon } from "lucide-react";

type Accent = "ai" | "iot" | "robotics";

type LessonSection = {
  title: string;
  paragraphs: string[];
  bullets: string[];
};

type LevelContent = {
  id: string;
  level: string;
  style: string;
  summary: string;
  sections: LessonSection[];
  project: string;
};

type ResourceLink = {
  title: string;
  description: string;
  href: string;
};

type LearningPath = {
  slug: "ai" | "iot" | "robotics";
  title: string;
  shortTitle: string;
  accent: Accent;
  icon: LucideIcon;
  heroTitle: string;
  heroDescription: string;
  mission: string;
  roadmap: string[];
  levels: LevelContent[];
  resources: ResourceLink[];
};

export const learningPaths: LearningPath[] = [
  {
    slug: "ai",
    title: "Artificial Intelligence",
    shortTitle: "AI",
    accent: "ai",
    icon: BrainCircuit,
    heroTitle: "Master Artificial Intelligence from first concepts to production systems",
    heroDescription:
      "This pathway moves from easy-to-understand pattern recognition ideas into machine learning workflows, deep learning architectures, LLM systems, and responsible AI engineering.",
    mission:
      "Learn how intelligent systems are designed, trained, evaluated, and deployed so you can build useful models with free tools and open ecosystems.",
    roadmap: [
      "Understand how data becomes signal, prediction, and decision.",
      "Practice with supervised learning, evaluation metrics, and small working prototypes.",
      "Go deeper into neural networks, transformers, MLOps, model serving, and AI safety."
    ],
    levels: [
      {
        id: "ai-beginner",
        level: "Beginner Level",
        style: "TGT Style",
        summary:
          "Start with simple language, visual analogies, and real-life examples so learners can recognize what AI is doing in everyday products, understand why data matters, and gain confidence before touching code.",
        sections: [
          {
            title: "Understanding AI with daily-life analogies",
            paragraphs: [
              "Artificial Intelligence can be introduced as a smart helper that notices patterns. Just as a student learns to identify fruits after seeing many examples, an AI system learns by observing data and finding repeated structures in it.",
              "At this stage, the goal is not mathematical depth. The goal is clarity. Learners should understand that AI is not magic. It is built from data, rules, examples, and feedback.",
              "A useful classroom approach is to compare AI with ordinary habits of learning. When people learn to recognize a friend's handwriting, to notice a traffic pattern on the road, or to guess weather from dark clouds, they are responding to repeated signals. AI systems also rely on repeated signals, but they do so through programmed structures and datasets.",
              "This analogy matters because beginners often imagine AI as something mysterious or almost supernatural. Replacing that mystery with recognizable learning behavior makes the entire subject less frightening and more approachable."
            ],
            bullets: [
              "AI means systems that perform tasks requiring pattern recognition or decision-making.",
              "Machine Learning means a system improves from examples instead of fixed manual rules.",
              "Deep Learning uses many neural layers to detect more complex patterns."
            ]
          },
          {
            title: "How computers learn from examples",
            paragraphs: [
              "A beginner should see learning as a comparison process. Suppose a child is learning what a dog looks like. At first, the child may confuse a wolf, a fox, or a fluffy toy. After seeing many examples and receiving correction, the child improves. ML systems learn in a similar way: they compare examples, adjust internal values, and become better at future guesses.",
              "This explanation is powerful because it shows that learning needs repetition, variety, and feedback. One example is rarely enough. A good teacher and a good dataset serve a similar purpose: both expose the learner to useful patterns.",
              "An easy beginner exercise is to imagine teaching a machine to tell apples from oranges. If the learner shows only one apple and one orange, the machine cannot generalize well. But if the learner shows many examples under different lighting, sizes, angles, and colors, the machine begins to notice deeper patterns that help it guess correctly later.",
              "This teaches an important principle: computers do not 'understand' in the way humans do. They learn useful statistical relationships. The better the examples and feedback, the better those relationships become."
            ],
            bullets: [
              "Examples are the learning material for many AI systems.",
              "Feedback tells the system whether it guessed well or poorly.",
              "Improvement happens gradually through many corrections."
            ]
          },
          {
            title: "Where beginners already meet AI",
            paragraphs: [
              "Recommendation engines, spam filters, face unlock, voice assistants, and route prediction are all accessible examples. These examples help learners connect theory with what they already use.",
              "Good beginner teaching should always answer one question: what problem is this AI solving for people?",
              "For example, a spam filter reduces unwanted messages. A navigation app predicts traffic and offers faster routes. A voice assistant turns spoken language into actions. When those examples are explained in terms of a user problem, AI stops feeling abstract and starts feeling like a practical engineering tool.",
              "Beginners also benefit from discussing how these systems can fail. A recommendation engine can push repetitive content. A face unlock system may struggle in poor lighting. A speech system may misunderstand accents. Seeing both usefulness and limits creates a healthier understanding of technology."
            ],
            bullets: [
              "YouTube and music recommendations use preference patterns.",
              "Face unlock uses image recognition.",
              "Voice assistants use speech recognition and language understanding."
            ]
          },
          {
            title: "The role of data in simple terms",
            paragraphs: [
              "Data is the experience of the AI system. If the data is narrow, biased, or low quality, the system learns a narrow, biased, or low-quality view of the world. This is one of the most important beginner lessons because it prevents the common mistake of thinking the model alone is everything.",
              "A child who studies only one kind of handwriting may struggle to read many different styles later. In the same way, a model trained on limited examples may fail when the real world looks more diverse.",
              "This section is a good place to explain the idea of representation. If a dataset contains only one kind of voice, one kind of face, one kind of road, or one kind of classroom, the model may appear strong during practice but become weak in real life. Beginners should understand that reality is varied and data should reflect that variety.",
              "Another strong beginner point is that data collection is a human decision. Someone chooses what to gather, how to label it, and what to ignore. So every dataset carries choices, limits, and assumptions."
            ],
            bullets: [
              "More data is not always enough; the data also needs variety and relevance.",
              "Wrong labels teach the wrong lesson.",
              "Poor data creates unreliable predictions."
            ]
          },
          {
            title: "Thinking in inputs and outputs",
            paragraphs: [
              "A helpful beginner habit is to describe an AI system by asking two questions: what goes in, and what should come out? For a face unlock system, the input is an image. The output is a yes-or-no identity decision. For a music recommender, the inputs include listening history, user behavior, and song attributes. The output is a ranked list of tracks.",
              "This input-output frame helps learners organize any future AI topic. No matter how advanced the technology becomes, systems still take information in and produce a result, recommendation, or action.",
              "Teachers can make this very concrete by asking students to describe familiar tasks. If a student wants to build a handwriting checker, the input may be an image of handwriting and the output may be a letter label. If the student wants to build a smart study planner, the input may be performance data and the output may be a recommendation.",
              "This habit is the beginning of system design. Clear task definitions prevent confusion later."
            ],
            bullets: [
              "Inputs can be text, images, sound, numbers, or sensor data.",
              "Outputs can be labels, rankings, predictions, or generated content.",
              "A clear task definition makes the system easier to design and evaluate."
            ]
          },
          {
            title: "Types of beginner AI tasks",
            paragraphs: [
              "Beginners benefit from recognizing that many AI tasks fall into a few understandable groups. Classification answers the question 'what is this?' Regression answers 'what number should I predict?' Recommendation answers 'what might this person like next?' Detection answers 'where is the object or event?'",
              "When learners can categorize a problem correctly, they begin to think more like builders. They no longer see AI as one giant mysterious subject. They see it as a family of related task types.",
              "This is useful because many project ideas become clearer once they are matched to a task category. A crop disease app is often a classification problem. A delivery-time estimator is often a regression problem. A video suggestion engine is a recommendation problem. An object finder in a camera view is a detection problem.",
              "The learner does not need advanced math yet. They need the habit of asking, 'What kind of prediction am I trying to make?'"
            ],
            bullets: [
              "Classification predicts categories like spam or not spam.",
              "Regression predicts values like house prices or temperature.",
              "Recommendation predicts preference or relevance."
            ]
          },
          {
            title: "Simple difference between AI, ML, and Deep Learning",
            paragraphs: [
              "Beginners often hear the terms AI, ML, and Deep Learning used as if they mean exactly the same thing. A clearer explanation is that AI is the broadest idea. It includes systems built to perform smart tasks. Machine Learning is a major part of AI that learns patterns from data. Deep Learning is a more specialized part of Machine Learning that uses many layers in neural networks.",
              "A teacher can compare this to school subjects. 'Science' is broad, 'Physics' is more specific, and 'Optics' is a smaller part inside Physics. AI, ML, and Deep Learning relate in a similar layered way.",
              "This distinction matters because it helps learners read future material without confusion."
            ],
            bullets: [
              "AI is the broader field of intelligent systems.",
              "Machine Learning is a method for learning from data.",
              "Deep Learning is a neural-network-heavy approach inside ML."
            ]
          },
          {
            title: "How rules and learning can both create intelligence",
            paragraphs: [
              "Not every useful AI system learns from massive data. Some systems rely heavily on rules, logic trees, search strategies, or knowledge bases. Others rely mostly on learning patterns from data. Many real systems combine both approaches.",
              "This is an important beginner correction because it prevents the false idea that every smart system must be a giant neural network. A good engineer chooses the right method for the problem.",
              "For example, a scheduling assistant may use rules plus ML. A chatbot may use language models plus tool logic. A safety system may combine machine predictions with strict rule-based guardrails."
            ],
            bullets: [
              "Rules are useful when behavior must be controlled or explainable.",
              "Learning is useful when patterns are too complex to hand-code fully.",
              "Hybrid systems are common in real products."
            ]
          },
          {
            title: "Why AI should help people",
            paragraphs: [
              "AI education should not begin and end with fascination. It should connect to usefulness, fairness, and human impact. A beginner who learns this early is less likely to chase hype without asking what problem is being solved.",
              "When AI helps doctors review scans faster, farmers detect crop disease earlier, or students receive personalized explanations, it becomes easier to see why careful engineering matters.",
              "This is also a good moment to explain that 'helpful' does not mean 'perfect.' Helpful AI still needs human checks, context, and good design. A beginner course becomes much stronger when students are encouraged to ask whether a system is useful, fair, and understandable."
            ],
            bullets: [
              "Useful AI solves clear human problems.",
              "Ethics should be introduced early, not only at advanced stages.",
              "Good technology supports people instead of confusing or replacing judgment blindly."
            ]
          },
          {
            title: "Common beginner misunderstandings about AI",
            paragraphs: [
              "Many beginners think AI always understands like a human, always needs enormous computers, or always removes the need for people. These ideas are not accurate. Some AI systems are small and focused. Some only solve narrow tasks. Many are tools that support people rather than replace them.",
              "Another common misunderstanding is that AI outputs are always trustworthy. In reality, they can be wrong, incomplete, or biased if the data, design, or context is poor. Beginners who learn this early build better habits later."
            ],
            bullets: [
              "AI is often narrow and task-specific, not universally intelligent.",
              "Outputs should be checked, especially in important decisions.",
              "Understanding limitations is part of understanding the technology."
            ]
          },
          {
            title: "Beginner roadmap for learning AI well",
            paragraphs: [
              "A strong beginner roadmap starts with observation and explanation, not coding complexity. Learners should first be able to describe what an AI system does, what data it likely needs, and what mistakes it could make. Only after that foundation should they move into notebooks, small datasets, and model training tools.",
              "This matters because beginners often rush to advanced libraries without understanding the problem frame. A slower, clearer roadmap produces stronger long-term learning.",
              "A sensible path is: first learn task types and examples, then learn why data quality matters, then explore simple ML tools, and only later move toward neural networks and model deployment. This order matches how understanding grows naturally."
            ],
            bullets: [
              "First learn task types and input-output thinking.",
              "Then study examples, data quality, and simple models.",
              "Only after that should learners move toward deeper practical implementation."
            ]
          },
          {
            title: "Mini projects for the absolute beginner",
            paragraphs: [
              "A beginner course becomes more engaging when it ends with small project ideas rather than only theory. A student could build a handwritten-number identifier using a guided notebook, create a simple spam-or-not-spam classifier, or map the logic of a recommendation app without yet building it fully.",
              "These small projects teach ownership. The learner begins to move from reading about AI to imagining themselves as someone who can build with it."
            ],
            bullets: [
              "Start with tiny projects that have clear inputs and outputs.",
              "Use public datasets and free notebook tools where possible.",
              "Focus on understanding the workflow, not perfection."
            ]
          }
        ],
        project:
          "Create a visual notebook that maps one daily AI product to its inputs, learning process, likely data sources, outputs, and human benefit."
      },
      {
        id: "ai-intermediate",
        level: "Intermediate Level",
        style: "PGT Style",
        summary:
          "Introduce the learner to technical workflows: data preparation, training, validation, feature engineering, model comparison, neural network intuition, and practical experimentation habits.",
        sections: [
          {
            title: "Core model-building workflow",
            paragraphs: [
              "Intermediate learners should understand that successful AI depends on the whole pipeline, not just the model choice. Raw data must be cleaned, structured, split, and evaluated with discipline.",
              "This level should also introduce the logic behind metrics so students know why a model can appear good on one metric yet still fail in practice.",
              "A strong workflow explanation should make each stage visible. First define the problem. Then gather and inspect data. Then prepare the data so it is consistent and useful. Then split it into training, validation, and test sets. Then train the model. Then evaluate the model honestly. Finally, improve the system by examining where it failed.",
              "This is important because many intermediate learners still think the hardest part is choosing an algorithm. In real work, clarity of task definition and data discipline are often more important."
            ],
            bullets: [
              "Collect, clean, split, train, validate, test, and iterate.",
              "Use accuracy, precision, recall, and F1 based on the task.",
              "Compare baseline models before reaching for heavier architectures."
            ]
          },
          {
            title: "Supervised, unsupervised, and reinforcement learning",
            paragraphs: [
              "At intermediate level, learners should be able to distinguish the three major learning setups. Supervised learning uses labeled examples, unsupervised learning looks for hidden structure, and reinforcement learning improves through rewards and penalties in an environment.",
              "These are not just definitions to memorize. They are design choices. The choice depends on what data is available, what feedback exists, and what kind of output is needed.",
              "A useful teaching strategy is to connect each approach to a recognizable scenario. Supervised learning fits when teachers or labelers already know the answer. Unsupervised learning fits when the goal is to discover structure, like grouping customers or documents. Reinforcement learning fits when an agent must act repeatedly and learn from outcomes over time.",
              "This helps learners stop treating AI methods as isolated vocabulary and start seeing them as ways to solve different kinds of problems."
            ],
            bullets: [
              "Supervised learning is common in classification and regression problems.",
              "Unsupervised learning is useful for clustering and pattern discovery.",
              "Reinforcement learning is useful when an agent must act over time."
            ]
          },
          {
            title: "Feature engineering and representation",
            paragraphs: [
              "Before deep models learn their own representations well, many systems still rely on careful feature design. Intermediate learners should understand that raw data often needs transformation into useful signals such as averages, counts, frequencies, or normalized measurements.",
              "Feature engineering teaches an important habit: think about what information truly helps solve the task instead of blindly feeding raw inputs into a model.",
              "For example, if the goal is to predict energy usage, raw timestamps may not be as helpful as engineered features like hour of day, weekday, or season. If the goal is to classify text, token frequencies or embedding vectors may capture more useful structure than raw strings alone.",
              "This does not mean deep learning makes features irrelevant. It means good engineers think carefully about representation at every stage."
            ],
            bullets: [
              "Features should reflect meaningful properties of the task.",
              "Normalization can help models train more reliably.",
              "Leakage must be avoided when building derived features."
            ]
          },
          {
            title: "Expanding into deep learning",
            paragraphs: [
              "Neural networks become easier to teach when presented as stacked feature detectors. Early layers notice simple structures, while deeper layers combine them into richer representations.",
              "This is also the right level to introduce convolutional models for images and transformer intuition for language.",
              "Intermediate learners should understand that deeper models are powerful because they can transform information across many stages, not because depth is automatically magical. More depth also means more data needs, more tuning difficulty, and higher computational cost.",
              "This balanced framing prevents students from overvaluing complex models when simpler models may still be enough."
            ],
            bullets: [
              "Decision trees and linear models are often strong starting points.",
              "CNNs are useful for images and spatial data.",
              "Transformers model relationships between tokens in parallel."
            ]
          },
          {
            title: "Baselines and why simple models still matter",
            paragraphs: [
              "A surprisingly important intermediate lesson is that strong ML work often begins with simple baselines. A linear model, a decision tree, or a frequency-based heuristic can give a useful performance reference point. Without a baseline, students may celebrate a complex model without knowing whether it actually improved anything meaningful.",
              "Baselines also make experimentation more disciplined. They help answer the question: did this new model really help, or did it just use more compute?"
            ],
            bullets: [
              "Start with a model that is easy to train and interpret.",
              "Use baselines to judge whether complexity is justified.",
              "A good workflow improves models step by step instead of jumping immediately to the most advanced option."
            ]
          },
          {
            title: "Evaluation beyond a single score",
            paragraphs: [
              "Intermediate learners should be trained to distrust oversimplified success claims. A model with high accuracy may still fail badly on minority cases or rare but important events. This is why confusion matrices, class-wise metrics, and validation strategies matter.",
              "Model evaluation becomes more realistic when learners connect metrics to consequences. In medical screening, missing a true positive can be more serious than a false alarm. In fraud detection, precision and recall may trade off in ways that affect business policy.",
              "Intermediate students should also begin to understand validation pitfalls. If data leakage occurs, the model may look much better than it truly is. If the test set is too similar to the training set, the result may not reflect real use conditions."
            ],
            bullets: [
              "Choose metrics based on the cost of mistakes.",
              "Validation data should reflect the real-world task distribution.",
              "Error analysis reveals what the model is really struggling with."
            ]
          },
          {
            title: "Case studies that connect AI to fields",
            paragraphs: [
              "At this level, case studies are valuable because they force learners to translate general techniques into domain-specific reasoning. For agriculture, the problem may be image-based crop disease classification. For education, it may be learner performance forecasting. For logistics, it may be demand prediction or anomaly detection.",
              "The point of the case study is not only to show success. It is also to reveal constraints: data collection difficulty, labeling cost, changing environments, and deployment limitations.",
              "A useful intermediate habit is to ask: what is the true target here, what data is available, what kind of errors matter most, and how would the system be used by real people? These questions turn generic techniques into applied thinking."
            ],
            bullets: [
              "Healthcare often requires careful validation and explainability.",
              "Agriculture often combines vision, weather, and sensor data.",
              "Business forecasting depends strongly on data quality and seasonality."
            ]
          },
          {
            title: "Practical experimentation habits",
            paragraphs: [
              "Strong AI learners build the habit of recording assumptions, versions, metrics, and observations for every experiment. Without discipline, experiments become hard to compare and reproduce.",
              "This is a bridge to MLOps thinking. Even at intermediate level, simple experiment logs and repeatable notebook structure can dramatically improve learning quality.",
              "Students should be encouraged to write down what changed in each run: dataset version, preprocessing method, model type, metric result, and interpretation. That habit is one of the clearest differences between random trial-and-error and real engineering practice."
            ],
            bullets: [
              "Track which dataset version and preprocessing steps were used.",
              "Record metric changes after each experiment.",
              "Document unexpected errors instead of hiding them."
            ]
          },
          {
            title: "Data preparation and cleaning in practice",
            paragraphs: [
              "Intermediate learners need to spend more time on data preparation because many real project failures begin there. Missing values, duplicated records, unbalanced classes, inconsistent text formats, and noisy labels can distort training long before a model is chosen.",
              "A useful way to teach this is to make the learner inspect a dataset as if it were a system under investigation. What is incomplete? What is inconsistent? What might mislead the model?",
              "Intermediate learners should also understand that cleaning is not neutral. Removing rows, imputing values, balancing classes, or standardizing formats changes the final training distribution. That means cleaning decisions should always be made with the task in mind."
            ],
            bullets: [
              "Cleaning data often improves results more than changing the model.",
              "Class imbalance can hide poor performance on important groups.",
              "Preprocessing decisions should be documented and justified."
            ]
          },
          {
            title: "Neural network intuition without losing the learner",
            paragraphs: [
              "Intermediate learners are ready for a stronger explanation of neural networks. Inputs pass through layers of weighted connections, those values are transformed, and the model gradually adjusts the weights to reduce error. This is easier to understand if each layer is described as a stage of pattern refinement rather than pure math.",
              "The goal here is not to avoid rigor forever. It is to build the right mental picture so later mathematical detail makes sense.",
              "A good intermediate explanation can show how one layer responds to simple patterns while deeper layers combine them into richer concepts. In image tasks, early layers may respond to edges or textures, while later layers detect more meaningful arrangements."
            ],
            bullets: [
              "Weights represent the influence of one signal on another.",
              "Activation functions help the network learn richer decision boundaries.",
              "Training adjusts the network so output errors shrink over time."
            ]
          },
          {
            title: "Deployment thinking for intermediate builders",
            paragraphs: [
              "Students often stop at evaluation, but a useful intermediate curriculum introduces deployment thinking early. Where will the model run? How fast must it respond? What happens if input quality changes? How will users know when the system is uncertain?",
              "This mindset prepares the learner to think beyond classroom success and toward usable systems.",
              "A classroom model that works once on a clean dataset is not the same as a product that supports users every day. By introducing deployment questions early, students begin thinking like builders rather than just demonstrators."
            ],
            bullets: [
              "A model is only valuable when it fits a real context of use.",
              "Latency, memory, and cost matter once systems leave the notebook.",
              "Uncertainty and failure modes should be discussed before deployment."
            ]
          },
          {
            title: "Intermediate project planning and communication",
            paragraphs: [
              "Technical learning becomes stronger when students can explain their work clearly. At intermediate level, that means being able to describe the problem, the data source, the preprocessing choices, the model comparison, the evaluation logic, and the result in plain technical language.",
              "This communication layer matters because real AI work involves collaboration with teachers, teammates, managers, domain experts, and users. A model that cannot be explained is harder to improve and harder to trust."
            ],
            bullets: [
              "Document the problem statement before building the model.",
              "Explain why the chosen metrics fit the task.",
              "Summarize results in a way that non-specialists can still understand."
            ]
          }
        ],
        project:
          "Build a small classifier with a public dataset, compare at least two model types, and write an experiment log with metrics, errors, and improvement ideas."
      },
      {
        id: "ai-advanced",
        level: "Advanced Level",
        style: "Engineer Style",
        summary:
          "This level focuses on internals, architecture design, production thinking, reliability, safety, and the responsibilities that come with deploying AI systems at scale.",
        sections: [
          {
            title: "Deep systems thinking for modern AI",
            paragraphs: [
              "Engineer-level understanding requires more than model training. It includes optimization behavior, architecture tradeoffs, hardware limits, monitoring strategy, and failure analysis.",
              "Modern LLM and multimodal systems also require knowledge of embeddings, attention, retrieval, prompt architecture, evaluation loops, and observability."
            ],
            bullets: [
              "Backpropagation, gradient descent, activation functions, and loss surfaces matter.",
              "Transformers, embeddings, attention, fine-tuning, and retrieval pipelines define modern language systems.",
              "MLOps includes experiment tracking, versioning, deployment, drift detection, and rollback strategy."
            ]
          },
          {
            title: "Neural networks from optimization to behavior",
            paragraphs: [
              "Advanced learners should think of a neural network not just as a stack of layers, but as an optimization system trying to reduce error across a vast parameter space. Training dynamics, initialization, loss choice, batch size, and optimizer settings all influence the final behavior.",
              "This matters because two teams using the same architecture can still reach different outcomes depending on data order, training stability, compute limits, or regularization strategy."
            ],
            bullets: [
              "Optimization behavior shapes convergence and generalization.",
              "Overfitting and underfitting are both design and monitoring problems.",
              "Regularization and architecture choice interact with dataset scale."
            ]
          },
          {
            title: "Transformer and LLM architecture in practice",
            paragraphs: [
              "Transformer systems changed AI by allowing models to reason over relationships between tokens more flexibly and in parallel. Advanced learners should understand tokenization, embeddings, positional information, self-attention, feed-forward blocks, and the role of pretraining.",
              "Large Language Models also require understanding the full product layer around the base model: context windows, retrieval, prompt construction, evaluation harnesses, safety layers, caching, and inference cost."
            ],
            bullets: [
              "Self-attention lets tokens influence one another based on learned relevance.",
              "Pretraining builds broad language patterns; fine-tuning specializes behavior.",
              "Retrieval and tool use can improve factual grounding and usefulness."
            ]
          },
          {
            title: "MLOps and production lifecycle",
            paragraphs: [
              "Production AI systems are living systems. Data changes, user behavior shifts, latency requirements evolve, and hardware budgets constrain inference. Engineer-level thinking includes pipelines for retraining, validation gates, rollback, monitoring, and alerting.",
              "A model that performs well in a notebook but fails silently in production is not a successful system. Reliability engineering is part of AI engineering."
            ],
            bullets: [
              "Track drift in data distributions and model outputs.",
              "Use deployment strategies that support rollback and staged release.",
              "Observe latency, throughput, cost, and failure patterns continuously."
            ]
          },
          {
            title: "Responsible and industrial AI",
            paragraphs: [
              "Production AI must be reliable, explainable enough for its context, and governed carefully. Bias, privacy, security, and transparency become design requirements, not optional extras.",
              "This is where learners begin thinking like system builders instead of just model users."
            ],
            bullets: [
              "Fairness and bias checks should be part of the evaluation loop.",
              "Serving architecture should match latency, cost, and reliability targets.",
              "AI in healthcare, finance, and mobility demands strong governance."
            ]
          },
          {
            title: "Multimodal and future-facing systems",
            paragraphs: [
              "The frontier of AI increasingly combines text, image, audio, video, and sensor streams. Advanced learners should understand why multimodal systems are powerful: they can ground language in perception, support richer interfaces, and connect AI more directly to robotics and IoT applications.",
              "Future-facing work also includes small efficient models, edge inference, synthetic data, agentic workflows, and human-AI collaboration tools. The right question is not only what is possible, but what is dependable and worth deploying."
            ],
            bullets: [
              "Multimodal models link language with perception and action.",
              "Smaller efficient models are important for accessibility and edge deployment.",
              "The future of AI depends on reliability, governance, and useful human-centered design."
            ]
          },
          {
            title: "Evaluation systems for LLM and generative products",
            paragraphs: [
              "Advanced AI teams need evaluation systems that go beyond traditional benchmarks. Generative systems must be tested for helpfulness, factuality, safety, consistency, task completion, and domain-specific quality. Offline evaluation, human review, and production telemetry all contribute to a realistic understanding of performance.",
              "This is especially important because a model can appear impressive in demos while failing under real workload diversity."
            ],
            bullets: [
              "LLM evaluation often combines automated checks and human judgment.",
              "Quality dimensions may include correctness, safety, latency, and user satisfaction.",
              "Evaluation should continue after deployment, not only before it."
            ]
          },
          {
            title: "Cost, infrastructure, and systems tradeoffs",
            paragraphs: [
              "Engineer-level AI must reckon with compute cost, memory budget, inference throughput, and infrastructure complexity. Model size, quantization, batching, caching, and serving topology all affect whether a system is sustainable to run.",
              "This perspective helps learners understand that the best model in theory may not be the best system in production."
            ],
            bullets: [
              "Serving architecture should match traffic patterns and latency targets.",
              "Smaller optimized models may outperform larger ones in real deployment conditions.",
              "Infrastructure tradeoffs are part of model selection."
            ]
          },
          {
            title: "Human-AI collaboration design",
            paragraphs: [
              "The most valuable advanced AI systems often work with people instead of trying to replace them completely. Decision support tools, copilots, explainable assistants, and retrieval-backed expert interfaces all depend on good collaboration design.",
              "This means advanced learners should study not only model capability, but also interface design, trust calibration, escalation paths, and responsible handoff to humans."
            ],
            bullets: [
              "AI should surface confidence, limits, and uncertainty where possible.",
              "Human review paths matter in sensitive domains.",
              "The design of collaboration can be as important as model quality."
            ]
          }
        ],
        project:
          "Design a complete architecture for an LLM-enabled assistant including data pipelines, retrieval, evaluation, observability, deployment strategy, cost controls, and safety policies."
      }
    ],
    resources: [
      {
        title: "Download AI Notes",
        description: "Direct notes link for learners who want a downloadable reference.",
        href: "https://drive.google.com/file/d/1L4JoGFUpEHVP1RVwZkXtDQOJHEBvqM-Z/view?usp=drivesdk"
      },
      {
        title: "Core AI Stack",
        description: "Python, Jupyter, scikit-learn, PyTorch, TensorFlow, Hugging Face, OpenCV.",
        href: "#"
      },
      {
        title: "Practice Direction",
        description: "Use open datasets and free notebooks to build classification, NLP, and small vision projects.",
        href: "#"
      },
      {
        title: "Model Builder Workflow",
        description: "Study a disciplined loop: dataset creation, baselines, evaluation, experiment logs, deployment checks, and monitoring.",
        href: "#"
      },
      {
        title: "LLM Systems Thinking",
        description: "Extend beyond prompting into retrieval, tooling, guardrails, feedback loops, and production architecture.",
        href: "#"
      }
    ]
  },
  {
    slug: "iot",
    title: "Internet of Things",
    shortTitle: "IoT",
    accent: "iot",
    icon: Cpu,
    heroTitle: "Build connected systems with sensors, networks, and automation logic",
    heroDescription:
      "This pathway teaches IoT from simple sensor-based thinking to architecture, edge intelligence, and scalable connected systems.",
    mission:
      "Learn how the physical world becomes measurable, connected, and programmable through devices, communication layers, and automation rules.",
    roadmap: [
      "Understand sensors, actuators, microcontrollers, and device logic.",
      "Connect systems through WiFi, Bluetooth, MQTT, dashboards, and alerts.",
      "Advance into secure embedded systems, edge AI, and industrial IoT architecture."
    ],
    levels: [
      {
        id: "iot-beginner",
        level: "Beginner Level",
        style: "TGT Style",
        summary:
          "Use relatable examples like smart lights, smart irrigation, and school monitoring systems to make connected devices easy to understand while building intuition for sensing, communication, and automation.",
        sections: [
          {
            title: "The basic IoT idea",
            paragraphs: [
              "IoT begins with a very human question: how can a thing sense what is happening and react usefully? A temperature sensor can detect heat, a controller can read that data, and a fan can turn on as a result.",
              "Beginner learners should see IoT as a cycle of sense, send, decide, and act."
            ],
            bullets: [
              "Sensors measure the environment.",
              "Controllers read data and apply logic.",
              "Actuators turn digital decisions into physical action."
            ]
          },
          {
            title: "How physical objects become smart systems",
            paragraphs: [
              "A beginner should understand that an ordinary object becomes part of IoT when it can observe something, process information, communicate with another system, or react automatically. A lamp becomes smarter when it can receive signals and change behavior according to time, motion, or ambient light.",
              "This explanation helps learners see that IoT is not one device. It is a relationship between the physical environment and digital decision-making."
            ],
            bullets: [
              "A smart object can sense, communicate, or respond.",
              "IoT connects the physical world to software logic.",
              "Automation becomes useful when it solves a real problem."
            ]
          },
          {
            title: "Simple examples that feel real",
            paragraphs: [
              "A smart classroom can monitor light and fan usage. A farm can measure soil moisture. A home can detect motion and switch lights automatically.",
              "These examples help learners understand that IoT is not just about internet access. It is about useful feedback between the physical and digital world."
            ],
            bullets: [
              "Smart homes automate comfort and safety.",
              "Smart farming improves water usage and monitoring.",
              "Smart cities coordinate data across many devices."
            ]
          },
          {
            title: "Meet the building blocks: sensor, controller, connection, action",
            paragraphs: [
              "For beginners, a four-part model works extremely well. First, the sensor measures something. Second, the controller reads it. Third, a connection sends or receives data if needed. Fourth, an action happens, such as an alert, display update, or actuator change.",
              "This four-part structure gives students a repeatable way to understand nearly any beginner IoT system."
            ],
            bullets: [
              "Sensors collect information like temperature or movement.",
              "Controllers such as Arduino or ESP32 apply programmed logic.",
              "Actuators and alerts create the visible result."
            ]
          },
          {
            title: "Why IoT matters in everyday life",
            paragraphs: [
              "IoT can save time, reduce waste, improve safety, and help people make better decisions. A water tank monitor helps prevent overflow. A smart energy meter helps a family understand electricity use. A parking counter helps reduce confusion in busy spaces.",
              "At beginner level, usefulness should always come before complexity. Learners should ask: what pain point is this connected system solving?"
            ],
            bullets: [
              "Useful IoT improves comfort, safety, or efficiency.",
              "Connected systems can support homes, schools, hospitals, and farms.",
              "Good design starts with a clear problem."
            ]
          },
          {
            title: "Beginner safety and responsibility",
            paragraphs: [
              "Even simple IoT systems handle real-world devices, environments, and sometimes private information. That means students should learn basic responsibility early. If a sensor is wrong, the action may be wrong. If a connected system is insecure, other people may interfere with it.",
              "This is a good level to introduce the idea that smart systems should also be safe, explainable, and reliable."
            ],
            bullets: [
              "Always think about what happens if a sensor gives the wrong value.",
              "Connected devices should not expose private data carelessly.",
              "Automation should support people, not create hidden risk."
            ]
          }
        ],
        project:
          "Draw a simple sensor-to-action diagram for a smart room or smart garden, including what is sensed, what logic is applied, and what action follows."
      },
      {
        id: "iot-intermediate",
        level: "Intermediate Level",
        style: "PGT Style",
        summary:
          "This stage introduces architecture layers, communication protocols, dashboards, event-driven automation, security basics, and practical design tradeoffs.",
        sections: [
          {
            title: "System design from device to cloud",
            paragraphs: [
              "Intermediate learners should understand the layers of an IoT solution: sensing hardware, firmware logic, communication transport, processing layer, and user-facing dashboard.",
              "Once these layers are visible, protocol choices and platform decisions become easier to reason about."
            ],
            bullets: [
              "ESP32 and Arduino support fast prototyping.",
              "MQTT is useful for lightweight messaging.",
              "Dashboards convert telemetry into human-readable control information."
            ]
          },
          {
            title: "Protocols and communication logic",
            paragraphs: [
              "Intermediate learners should understand that not every IoT system communicates the same way. A low-power sensor in a field has different needs from a smart speaker inside a house. Communication choices depend on range, power use, reliability, bandwidth, and cost.",
              "This stage should introduce why MQTT, HTTP, Bluetooth, WiFi, and other protocols exist rather than treating them as a random list."
            ],
            bullets: [
              "WiFi is common for local internet-connected devices with enough power.",
              "Bluetooth is useful for short-range device interaction.",
              "MQTT is lightweight and well suited to message-based IoT workflows."
            ]
          },
          {
            title: "Dashboards, rules, and event flow",
            paragraphs: [
              "A good intermediate IoT student should be able to describe how raw measurements become something useful for a human operator. Sensor values are collected, transmitted, stored, displayed, and often used to trigger rules such as alerts or automated actions.",
              "This is where dashboards become more than decoration. They are decision surfaces for people."
            ],
            bullets: [
              "Telemetry data becomes meaningful when visualized over time.",
              "Rules engines convert thresholds or events into actions.",
              "Alerting helps people respond before problems grow."
            ]
          },
          {
            title: "Security and reliability",
            paragraphs: [
              "Connected systems become risky if they are not authenticated, encrypted, and updated properly. This level should teach that secure design is foundational, not decorative.",
              "Reliability also means planning for latency, power limits, and unstable networks."
            ],
            bullets: [
              "Use authentication and encryption where possible.",
              "Handle disconnections and retries gracefully.",
              "Log useful device state for debugging and monitoring."
            ]
          },
          {
            title: "Edge processing and smart controllers",
            paragraphs: [
              "Intermediate learners should start seeing that not every decision has to be made in the cloud. Sometimes a controller near the sensor should decide immediately because speed matters or connectivity is weak. This is the beginning of edge computing logic.",
              "Teaching this idea early prepares learners for more advanced TinyML and distributed architecture later."
            ],
            bullets: [
              "Edge processing reduces delay and can reduce bandwidth use.",
              "Local decisions improve responsiveness during network problems.",
              "Cloud and edge often work together instead of replacing one another."
            ]
          },
          {
            title: "Intermediate case studies",
            paragraphs: [
              "Case studies make protocol and architecture choices feel real. A temperature logger in a lab may use WiFi and a dashboard. A field monitoring system may prefer lower-power long-range communication. A motion-based alert system may care more about immediate response than rich analytics.",
              "These case studies help students stop thinking of IoT as one fixed template."
            ],
            bullets: [
              "Smart home systems prioritize convenience and immediate feedback.",
              "Industrial monitoring prioritizes reliability and logging.",
              "Agriculture systems often balance range, energy, and environment."
            ]
          }
        ],
        project:
          "Plan a complete room-monitoring system with sensor flow, dashboard data, alert rules, communication choice, and a brief explanation of why that architecture fits the problem."
      },
      {
        id: "iot-advanced",
        level: "Advanced Level",
        style: "Engineer Style",
        summary:
          "Engineer-level IoT focuses on architecture tradeoffs, device lifecycle management, edge intelligence, fleet-scale reliability, and industrial-grade security and observability.",
        sections: [
          {
            title: "Embedded and distributed architecture",
            paragraphs: [
              "Advanced IoT systems require design discipline around power use, protocol selection, provisioning, firmware management, and device observability.",
              "At this level, learners should start comparing design patterns instead of just assembling devices."
            ],
            bullets: [
              "Low-power design matters for remote or battery-operated devices.",
              "Provisioning and fleet updates matter once deployments scale.",
              "Gateways, brokers, and digital twins support larger systems."
            ]
          },
          {
            title: "Lifecycle management and fleet operations",
            paragraphs: [
              "Advanced IoT engineering is not only about building a device that works once. It is about managing thousands of devices over time. That includes provisioning, configuration, secure onboarding, firmware updates, monitoring, decommissioning, and auditing.",
              "A fleet perspective changes the way engineers design systems. Repeatability, observability, and operational tooling become core concerns."
            ],
            bullets: [
              "Provisioning must assign identity, credentials, and configuration safely.",
              "Firmware updates need rollback paths and verification.",
              "Fleet health dashboards help operators detect issues early."
            ]
          },
          {
            title: "Edge AI and industrial systems",
            paragraphs: [
              "Modern IoT increasingly pushes intelligence closer to the device using TinyML and edge inference. This reduces latency and can improve privacy.",
              "Industrial IoT adds even more requirements around uptime, auditability, and secure operations."
            ],
            bullets: [
              "Edge inference can run on microcontrollers or small edge computers.",
              "Industrial systems need observability and incident recovery paths.",
              "Scalable platforms manage devices, data streams, and business logic together."
            ]
          },
          {
            title: "Security architecture for real deployments",
            paragraphs: [
              "At engineer level, security is no longer a simple checklist. It is an architecture concern involving trust boundaries, device identity, secure boot, signed firmware, encrypted communication, key rotation, and access control. Weakness in any part can compromise the whole deployment.",
              "This is particularly important because IoT systems often interact with physical infrastructure, not just information systems."
            ],
            bullets: [
              "Secure boot helps ensure trusted firmware starts on the device.",
              "Signed updates reduce the risk of malicious firmware injection.",
              "Access control must apply to devices, dashboards, and operators."
            ]
          },
          {
            title: "Observability, reliability, and system economics",
            paragraphs: [
              "Advanced deployments must balance technical design with operational cost. Transmitting every reading at full frequency may be wasteful. Storing everything forever may be expensive. Engineers must decide what to process locally, what to compress, what to store, and what to alert on.",
              "Observability helps with those decisions by exposing latency, failure rates, connectivity health, battery behavior, message volume, and rule execution outcomes."
            ],
            bullets: [
              "Reliable systems monitor both device health and data quality.",
              "Cost-aware architecture matters in long-running deployments.",
              "Observability is essential for debugging distributed physical systems."
            ]
          },
          {
            title: "Future-facing IoT systems",
            paragraphs: [
              "The future of IoT includes edge AI, digital twins, federated learning, low-power intelligence, and deeper integration with robotics and industrial automation. The most exciting direction is not simply more connected devices. It is more meaningful coordination between sensing, decision-making, and action.",
              "This future also demands sustainable engineering. Efficient energy use, repairable hardware, careful data retention, and resilient design will matter more as deployments grow."
            ],
            bullets: [
              "TinyML brings learning capability closer to constrained devices.",
              "Digital twins help represent physical assets in software.",
              "Future IoT success depends on useful, sustainable, and secure deployment."
            ]
          }
        ],
        project:
          "Architect an edge-enabled IoT deployment for agriculture, logistics, or public infrastructure, including device identity, communication strategy, update plan, observability, and security controls."
      }
    ],
    resources: [
      {
        title: "Download IoT Notes",
        description: "Direct notes link for learners who want an IoT reference document.",
        href: "https://drive.google.com/file/d/1za0AEI5Vb89kaoIFBaT87QVxQ-nEM6dM/view?usp=drivesdk"
      },
      {
        title: "Core IoT Stack",
        description: "Arduino IDE, PlatformIO, ESP32, MicroPython, Node-RED, Mosquitto, Grafana.",
        href: "#"
      },
      {
        title: "Prototype Tools",
        description: "Use Wokwi, KiCad, and dashboard tools to simulate and document device systems.",
        href: "#"
      },
      {
        title: "Automation Thinking",
        description: "Practice building if-then logic before expanding into cloud-connected workflows.",
        href: "#"
      },
      {
        title: "Embedded Systems Workflow",
        description: "Study sensing loops, message flow, dashboard design, and lifecycle management as one continuous system.",
        href: "#"
      },
      {
        title: "Edge and TinyML Direction",
        description: "Explore how lightweight models and on-device inference expand what IoT systems can do locally.",
        href: "#"
      }
    ]
  },
  {
    slug: "robotics",
    title: "Robotics",
    shortTitle: "Robotics",
    accent: "robotics",
    icon: Radar,
    heroTitle: "Learn robotics as a fusion of mechanics, sensing, control, and autonomy",
    heroDescription:
      "This pathway explains how robots perceive, decide, and move through the world while balancing hardware constraints and software intelligence.",
    mission:
      "Develop the mindset to build machines that sense, plan, and act safely in real environments using open tools and system-level thinking.",
    roadmap: [
      "Understand components like sensors, motors, controllers, and batteries.",
      "Study motion, feedback, localization, and structured control logic.",
      "Advance into autonomy stacks, ROS-style systems, simulation, and industrial applications."
    ],
    levels: [
      {
        id: "robotics-beginner",
        level: "Beginner Level",
        style: "TGT Style",
        summary:
          "Introduce robots through familiar devices and simple sense-think-act stories that make physical intelligence easy to picture while building confidence around parts, roles, and basic robot behavior.",
        sections: [
          {
            title: "What makes a machine a robot",
            paragraphs: [
              "A robot is not just a machine that moves. It is a machine that senses conditions, processes information, and acts based on that information.",
              "This distinction helps beginners understand why a remote-control car and an autonomous rover are not the same thing."
            ],
            bullets: [
              "Sensors tell the robot what is happening.",
              "Controllers make decisions based on the input.",
              "Motors and actuators produce movement or action."
            ]
          },
          {
            title: "The sense-think-act pattern",
            paragraphs: [
              "One of the best beginner ways to understand robotics is through the sense-think-act cycle. First, the robot senses something with a camera, distance sensor, switch, or touch input. Next, it thinks by applying programmed logic. Finally, it acts by moving a motor, changing direction, or using a tool.",
              "This pattern helps students understand that robot behavior is not random. It is the result of repeated loops of observation and response."
            ],
            bullets: [
              "Robots repeat sensing and decision-making many times per second.",
              "A wrong sensor reading can lead to a wrong action.",
              "Simple robot intelligence often begins with clear rule-based decisions."
            ]
          },
          {
            title: "Examples that build intuition",
            paragraphs: [
              "Vacuum robots, line followers, robotic arms, and delivery bots make excellent entry points because learners can connect each part to an observable behavior.",
              "Story-based teaching is powerful here: what is the robot trying to sense, what decision is it making, and what action follows?"
            ],
            bullets: [
              "Line-following robots show sensor-guided movement.",
              "Robotic arms show repeatable precision tasks.",
              "Delivery robots show navigation and obstacle awareness."
            ]
          },
          {
            title: "Core robot parts in simple language",
            paragraphs: [
              "Beginners should become comfortable naming robot parts and knowing their jobs. The chassis or frame gives structure. The controller is the brain-like unit that runs the program. Sensors collect information. Motors move the robot. Batteries provide power. Wheels, tracks, or legs create mobility depending on design.",
              "This makes robotics more approachable because learners can look at a machine and break it into understandable functions."
            ],
            bullets: [
              "The frame holds the robot together.",
              "The controller executes instructions and manages signals.",
              "Power systems keep every other part alive."
            ]
          },
          {
            title: "Why different robots look different",
            paragraphs: [
              "A beginner often assumes that a robot should look humanoid, but most real robots are shaped by their task. A warehouse robot may be flat and efficient. A drone is built for lift and balance. A robotic arm is designed for precise repeated movement.",
              "Teaching this early helps learners connect engineering design to purpose. Form follows function."
            ],
            bullets: [
              "Robot shape depends on the job it must perform.",
              "Mobility needs affect wheel, leg, or rotor design.",
              "Some robots are made for speed, others for precision or safety."
            ]
          },
          {
            title: "Beginner ethics and safety in robotics",
            paragraphs: [
              "Even at a basic level, robotics should be taught with responsibility. Robots move in the physical world, which means mistakes can cause damage or injury. Students should learn that emergency stops, safe testing, and careful supervision matter from the beginning.",
              "A good beginner robotics lesson includes not only what a robot can do, but how to make it operate safely around people and objects."
            ],
            bullets: [
              "Always think about what happens if a robot senses incorrectly.",
              "Test movement carefully before full-speed operation.",
              "Safe robotics is better robotics."
            ]
          }
        ],
        project:
          "Sketch a beginner robot and label its sensors, controller, actuators, power system, movement system, and task logic."
      },
      {
        id: "robotics-intermediate",
        level: "Intermediate Level",
        style: "PGT Style",
        summary:
          "This level teaches how robots maintain direction, correct error, avoid obstacles, estimate state, and plan movement through structured feedback and control logic.",
        sections: [
          {
            title: "Motion and control fundamentals",
            paragraphs: [
              "Kinematics describes how a robot moves. Control explains how a robot keeps its movement stable and corrects deviation. These ideas are easier to understand when tied to real rover or drone examples.",
              "Intermediate teaching should make feedback loops visible, not abstract."
            ],
            bullets: [
              "PID control is a practical starting point for correction logic.",
              "Localization tells the robot where it is.",
              "Path planning helps the robot decide where to go next."
            ]
          },
          {
            title: "Sensors, estimation, and feedback loops",
            paragraphs: [
              "Intermediate robotics requires a clearer understanding of why sensing alone is not enough. Sensors produce measurements, but the robot often still has to estimate its real state because measurements can be noisy or incomplete. Feedback loops then use that estimated state to guide corrective action.",
              "This is the beginning of systems thinking in robotics: the robot is constantly comparing where it is with where it should be."
            ],
            bullets: [
              "Encoders help estimate wheel rotation and motion.",
              "IMUs help with orientation and movement changes.",
              "Feedback control reduces the gap between target behavior and real behavior."
            ]
          },
          {
            title: "Applying system logic",
            paragraphs: [
              "Robotics at this level becomes a chain of sensing, estimation, planning, and actuation. Each step introduces uncertainty, which is why feedback and monitoring matter.",
              "This is also where learners begin appreciating simulation and structured testing."
            ],
            bullets: [
              "Obstacle detection informs path changes.",
              "State feedback improves navigation reliability.",
              "Simulation helps debug before real deployment."
            ]
          },
          {
            title: "Path planning and reactive behavior",
            paragraphs: [
              "Intermediate students should understand the difference between reactive behavior and planned behavior. A reactive robot responds instantly to sensor events like 'object ahead, turn left.' A planned robot uses a map, goal, or route strategy to move more intelligently toward a destination.",
              "Both approaches are useful. Reactive control is fast and simple. Planning becomes more powerful in structured or larger environments."
            ],
            bullets: [
              "Reactive control is useful for quick obstacle avoidance.",
              "Planned navigation is useful for goal-directed behavior.",
              "Many real robots combine local reaction with higher-level planning."
            ]
          },
          {
            title: "Intermediate robot types and applications",
            paragraphs: [
              "At this level, learners should compare robotics categories more analytically. Mobile robots move through space. Manipulators interact with objects. Drones operate in three dimensions. Collaborative robots work near people. Each type creates different control and sensing challenges.",
              "This comparison teaches students that robotics is not a single topic but a family of engineering problems."
            ],
            bullets: [
              "Mobile robots need navigation and localization.",
              "Robot arms need position, precision, and repeatability.",
              "Collaborative robots must emphasize safety and human interaction."
            ]
          },
          {
            title: "Simulation and debugging habits",
            paragraphs: [
              "A strong intermediate robotics learner uses simulation to test ideas before risking hardware. Simulation helps check motion logic, sensor assumptions, path planning, and control behavior under repeatable conditions.",
              "Just as important is debugging discipline: log the state, check sensor values, isolate one subsystem at a time, and verify assumptions step by step."
            ],
            bullets: [
              "Simulation reduces hardware risk and speeds iteration.",
              "Subsystem testing helps identify where failures begin.",
              "Logs and visual traces make robot behavior easier to understand."
            ]
          }
        ],
        project:
          "Design a rover behavior plan that explains sensing, estimation, route choice, control correction, and how the robot handles unexpected obstacles."
      },
      {
        id: "robotics-advanced",
        level: "Advanced Level",
        style: "Engineer Style",
        summary:
          "Engineer-level robotics brings together perception stacks, planning systems, manipulation, middleware, simulation, safety-aware deployment, and long-term operational reliability.",
        sections: [
          {
            title: "Autonomy architecture",
            paragraphs: [
              "Advanced robotics requires viewing the robot as a coordinated set of subsystems: perception, localization, planning, control, and execution. Middleware helps these pieces communicate reliably.",
              "This is where ROS, simulation tools, and modular design patterns become essential."
            ],
            bullets: [
              "ROS-style nodes and messages structure large robotics systems.",
              "SLAM, sensor fusion, and planning support autonomy.",
              "Manipulation requires kinematics, trajectories, and force-aware control."
            ]
          },
          {
            title: "Perception, localization, and world models",
            paragraphs: [
              "Advanced robotics depends on a world model. Cameras, lidars, encoders, IMUs, and other sensors do not automatically create understanding. The robot must fuse signals, localize itself, and maintain a useful representation of space, obstacles, targets, or objects.",
              "This is why perception is not a separate bonus feature. It is foundational to trustworthy autonomy."
            ],
            bullets: [
              "Sensor fusion improves reliability by combining strengths of different sensors.",
              "Localization estimates the robot pose in the environment.",
              "Maps and scene models support planning and task execution."
            ]
          },
          {
            title: "Manipulation and motion generation",
            paragraphs: [
              "Engineer-level robotics should cover more than mobile movement. Manipulation introduces forward kinematics, inverse kinematics, trajectory planning, force management, grasp strategies, and task sequencing. A robot arm must not only reach an object but do so safely, precisely, and repeatably.",
              "This part of robotics reveals how deeply mechanics and software are intertwined."
            ],
            bullets: [
              "Forward kinematics predicts end-effector position from joint states.",
              "Inverse kinematics solves how joints should move to reach a target.",
              "Trajectory generation balances smoothness, safety, and task speed."
            ]
          },
          {
            title: "Real-world deployment",
            paragraphs: [
              "Industrial and field robotics add strict demands around safety, recovery behavior, human interaction, and maintenance strategy. Engineer-level learners should be able to reason about those operational constraints.",
              "The most useful robots are not just technically impressive. They are reliable, understandable, and safe in the environments where people need them."
            ],
            bullets: [
              "Warehouse and medical robotics require strong reliability planning.",
              "Human-robot interaction needs trust and understandable behavior.",
              "Simulation and logs should support debugging and certification workflows."
            ]
          },
          {
            title: "Middleware, distributed control, and system integration",
            paragraphs: [
              "Real robots are often distributed systems. Perception may run on one compute unit, control on another, and planning somewhere else. Middleware helps those modules exchange messages, commands, states, and service requests in a structured way.",
              "This is why tools like ROS and ROS 2 matter so much in advanced robotics education. They teach modularity, communication, and integration discipline."
            ],
            bullets: [
              "Nodes, topics, services, and actions organize robot software.",
              "Clear interfaces make large robotics systems maintainable.",
              "Distributed design must still respect timing and safety constraints."
            ]
          },
          {
            title: "Safety, reliability, and human-centered deployment",
            paragraphs: [
              "Advanced robotics must always include safety engineering. Robots operating around people need predictable motion, safe stop behavior, recovery logic, and operational guardrails. This is as important as navigation or perception.",
              "Reliability also depends on maintainability. Systems need diagnostics, logs, calibration processes, and hardware service plans."
            ],
            bullets: [
              "Safety is a design discipline, not just a testing step.",
              "Diagnostics and calibration matter for long-term operation.",
              "Human-centered robotics requires understandable behavior and trust."
            ]
          },
          {
            title: "Future-facing robotics",
            paragraphs: [
              "The future of robotics includes stronger AI integration, better perception, more adaptive manipulation, soft robotics, swarm coordination, and robots designed for healthcare, education, logistics, disaster response, and environmental restoration.",
              "The important lesson for advanced learners is that robotics is not only about autonomy for its own sake. It is about building machines that can work meaningfully, safely, and cooperatively in the world."
            ],
            bullets: [
              "AI is making robot perception and planning more adaptive.",
              "Soft and bio-inspired robotics expand how machines interact with the world.",
              "Robotics for humanity should emphasize usefulness, safety, and accessibility."
            ]
          }
        ],
        project:
          "Design a modular autonomy stack for a rover, field robot, or collaborative mobile platform, including perception, localization, planning, control, safety, diagnostics, and middleware communication."
      }
    ],
    resources: [
      {
        title: "Core Robotics Stack",
        description: "ROS 2, Webots, Gazebo, OpenCV, FreeCAD, Blender, Arduino, Raspberry Pi.",
        href: "#"
      },
      {
        title: "Simulation-first Practice",
        description: "Prototype path planning and control ideas in simulation before moving to hardware.",
        href: "#"
      },
      {
        title: "Field Applications",
        description: "Explore warehouse, inspection, education, agriculture, and assistive robotics use cases.",
        href: "#"
      },
      {
        title: "Robotics Systems Workflow",
        description: "Study how sensing, estimation, planning, control, and safety fit together as one engineering stack.",
        href: "#"
      },
      {
        title: "Simulation and ROS Direction",
        description: "Use simulation-first practice and ROS-style modularity to move from experiments toward robust systems.",
        href: "#"
      }
    ]
  }
];

export type { Accent, LearningPath, LevelContent, LessonSection, ResourceLink };

export function getLearningPath(slug: LearningPath["slug"]) {
  return learningPaths.find((path) => path.slug === slug);
}

export function getLevelSlug(levelId: string) {
  if (levelId.includes("beginner")) return "beginner";
  if (levelId.includes("intermediate")) return "intermediate";
  return "advanced";
}

export function getLearningPathLevel(
  slug: LearningPath["slug"],
  levelSlug: "beginner" | "intermediate" | "advanced"
) {
  const path = getLearningPath(slug);

  if (!path) return undefined;

  return path.levels.find((level) => getLevelSlug(level.id) === levelSlug);
}
