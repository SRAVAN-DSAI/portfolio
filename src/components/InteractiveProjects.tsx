import { useState } from 'react';
import { ExternalLink, Github, Star, Play, Brain, TrendingUp, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const InteractiveProjects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 4,
      title: 'Flood Prediction with Machine Learning',
      description: 'End-to-end regression model predicting flood probability with 94% R-squared accuracy, deployed as an interactive web app.',
      longDescription: 'Developed a high-performance LightGBM model by engineering new features (e.g., LandslideRisk). The project involved model comparison, hyperparameter tuning, and deployment via Streamlit, solving challenges like large file handling with Git LFS.',
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kaggle.com%2Fdatasets%2Faritra100%2Fflood-prediction-dataset&psig=AOvVaw1iVV_BuN9lCQO7SRx5NdEK&ust=1754856490261000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMDMmoPE_o4DFQAAAAAdAAAAABAE",
      technologies: ["Python", "Scikit-learn", "LightGBM", "Streamlit", "Pandas", "Git LFS"],
      github: 'https://github.com/SRAVAN-DSAI/Flood_prediction_model',
      demo: 'https://flood-prediction-model.streamlit.app/',
      category: 'Machine Learning',
      featured: true,
      icon: Droplets,
      color: 'from-cyan-500 to-blue-500',
      metrics: { rSquared: '94%'},
      tags: ['Regression', 'Deployment', 'Streamlit', 'Feature Engineering'],
      complexity: 'Advanced',
      duration: '1 week',
      team: 'Solo Project'
    },
    {
      id: 1,
      title: 'NLP News Article Classification with Hugging Face Transformers',
      description: 'Advanced sentiment analysis using pre-trained transformers, fine-tuned for domain-specific text classification with 96% accuracy.',
      longDescription: 'Leveraging BERT and RoBERTa models from Hugging Face, this project implements multi-class sentiment analysis with custom fine-tuning. Features include model comparison, attention visualization, and deployment via REST API.',
      image: "https://www.searchenginejournal.com/wp-content/uploads/2020/08/an-introduction-to-natural-language-processing-with-python-for-seos-5f3519eeb8368.png?auto=format&fit=crop&q=80&w=1770",
      technologies: ["Python", "PyTorch", "Hugging Face Transformers", "Streamlit", "Pandas"],
      github: 'https://github.com/SRAVAN-DSAI/nlp-news-classifier',
      demo: 'https://nlp-news-classifier.streamlit.app/',
      category: 'NLP',
      featured: true,
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      metrics: { accuracy: '96.1%', f1Score: '0.94', inference: '50ms' },
      tags: ['Transformer', 'Fine-tuned', 'Production'],
      complexity: 'Advanced',
      duration: '5 days',
      team: 'Solo Project'
    },
    {
      id: 2,
      title: "UrbanSound8K Audio Classification with PyTorch",
      description: "Advanced audio classification using a fine-tuned ResNet18 model, achieving 96.37% accuracy on urban sound detection.",
      longDescription: "This project implements a convolutional neural network (ResNet18) fine-tuned with PyTorch to classify audio from the UrbanSound8K dataset into 10 categories. Features include real-time spectrogram generation, batch processing, and deployment via Streamlit, with visualizations using Plotly.",
      image: "https://cdn-uploads.huggingface.co/production/uploads/6290ec00a29097b211b94f0f/IV-nahjZbufzIzGBUP-_e.png",
      technologies: ["Python", "PyTorch", "Librosa", "Streamlit", "Plotly"],
      github: "https://github.com/SRAVAN-DSAI/Sound-Classifier",
      demo: "https://waveform-classifier.streamlit.app/",
      category: "Audio Processing",
      featured: true,
      icon: TrendingUp,
      color: "from-green-500 to-teal-500",
      metrics: {accuracy: "96.37%",f1Score: "95.80%",inference: "100ms"},
      tags: ["Audio Classification", "Deep Learning", "Real-time", "Production"],
      complexity: "Advanced",
      duration: "1 week",
      team: "Solo Project"
    },
    {
      id: 3,
      title: 'Logistics and Supply Chain Analysis',
      description: 'End-to-end data analysis project using SQL, Power BI, and Tableau to optimize supply chain performance and assess risk.',
      longDescription: 'Utilized SQL for advanced data modeling (star schema, feature engineering) and created interactive dashboards in Power BI and Tableau to visualize key insights on cost drivers, route risk, and operational efficiency.',
      image: "https://acropolium.com/img/articles/supply-chain-analytics-software/img09.jpg",
      technologies: ["SQL", "Power BI", "Tableau", "MySQL", "Git"],
      github: "https://github.com/SRAVAN-DSAI/Logistics-Analysis",
      demo: "https://public.tableau.com/shared/J2C5Q5HZ6?:display_count=n&:origin=viz_share_link",
      category: 'Data Analysis',
      featured: true,
      icon: TrendingUp,
      color: 'from-blue-600 to-cyan-500',
      metrics: { dashboards: '2', insights: '5+', queries: '20+' },
      tags: ['SQL', 'Dashboarding', 'Data Modeling'],
      complexity: 'Advanced',
      duration: '1 week',
      team: 'Solo Project'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'Machine Learning', label: 'ML', count: projects.filter(p => p.category === 'Machine Learning').length },
    { id: 'NLP', label: 'NLP', count: projects.filter(p => p.category === 'NLP').length },
    { id: 'Audio Processing', label: 'Audio', count: projects.filter(p => p.category === 'Audio Processing').length },
    { id: 'Data Analysis', label: 'Data Analysis', count: projects.filter(p => p.category === 'Data Analysis').length }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Expert': return 'bg-red-100 text-red-800';
      case 'Advanced': return 'bg-orange-100 text-orange-800';
      case 'Intermediate': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Interactive Project Portfolio</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Explore my featured machine learning projects from end-to-end.
        </p>
      </div>

      <Tabs value={activeFilter} onValueChange={setActiveFilter} className="mb-12">
        <TabsList className="grid w-full grid-cols-5 gap-1 h-auto p-1 bg-gray-100 rounded-xl">
          {categories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="flex flex-col items-center p-3 data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg transition-all duration-300"
            >
              <span className="font-medium text-sm">{category.label}</span>
              <span className="text-xs text-gray-500 mt-1">({category.count})</span>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={activeFilter} className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group border-0 shadow-lg bg-white/60 backdrop-blur-sm overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-90 transition-all duration-500`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>
                  
                  <div className="absolute top-4 left-4 p-2 bg-white/95 backdrop-blur-sm rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <project.icon className="h-5 w-5 text-gray-700" />
                  </div>
                  
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center shadow-lg">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </div>
                  )}
                  
                  <div className={`absolute bottom-4 left-4 px-2 py-1 rounded-full text-xs font-medium ${getComplexityColor(project.complexity)} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    {project.complexity}
                  </div>
                  
                  <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <Button size="sm" variant="secondary" className="bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg shadow-lg" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <Play className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className={`bg-gradient-to-r ${project.color} text-white border-0 shadow-sm`}>
                      {project.category}
                    </Badge>
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <span>{project.duration}</span>
                      <span>•</span>
                      <span>{project.team}</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-lg text-gray-900 group-hover:text-gray-700 transition-colors line-clamp-2 leading-tight">
                    {project.title}
                  </CardTitle>
                  
                  <CardDescription className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                    {hoveredProject === project.id ? project.longDescription : project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0 space-y-4">
                  <div className="grid grid-cols-3 gap-2 text-center bg-gray-50 rounded-lg p-3">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="flex flex-col">
                        <span className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                        <span className="text-sm font-semibold text-gray-900">{value}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs hover:shadow-md transition-all duration-300 hover:scale-105"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs text-gray-500">
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Interested in Collaboration?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          I'm always excited to work on challenging data science projects. Let's discuss how we can leverage ML to solve your business problems.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg">
            <a href="#contact" className="flex items-center">
              Start a Project
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/sravan-dsai" target="_blank" rel="noopener noreferrer">
              View All Code
              <Github className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveProjects;
