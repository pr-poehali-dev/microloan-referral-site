import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const mfoData = [
  {
    id: 1,
    name: 'БыстроДеньги',
    logo: '💰',
    rate: '0%',
    amount: '5 000 - 30 000 ₽',
    term: '5 - 30 дней',
    rating: 4.8,
    reviews: 3420,
    features: ['Без процентов первый займ', 'Одобрение за 5 минут', 'Круглосуточно'],
    isNew: true,
    isBest: true
  },
  {
    id: 2,
    name: 'ЭкспрессЗайм',
    logo: '⚡',
    rate: '0.5%',
    amount: '3 000 - 50 000 ₽',
    term: '7 - 60 дней',
    rating: 4.6,
    reviews: 2890,
    features: ['Без отказа', 'На карту любого банка', 'Без проверки КИ'],
    isNew: false,
    isBest: true
  },
  {
    id: 3,
    name: 'МигКредит',
    logo: '🚀',
    rate: '0%',
    amount: '1 000 - 20 000 ₽',
    term: '5 - 21 день',
    rating: 4.7,
    reviews: 4120,
    features: ['Первый займ 0%', 'Без звонков', 'Мгновенное решение'],
    isNew: true,
    isBest: false
  },
  {
    id: 4,
    name: 'ФинансПлюс',
    logo: '💎',
    rate: '0.8%',
    amount: '10 000 - 100 000 ₽',
    term: '30 - 365 дней',
    rating: 4.5,
    reviews: 1820,
    features: ['До 100 000 рублей', 'На длительный срок', 'Низкий процент'],
    isNew: false,
    isBest: false
  },
  {
    id: 5,
    name: 'ДеньгиСрочно',
    logo: '🏃',
    rate: '0%',
    amount: '2 000 - 15 000 ₽',
    term: '7 - 30 дней',
    rating: 4.4,
    reviews: 2340,
    features: ['С плохой КИ', 'До зарплаты', 'Без справок'],
    isNew: false,
    isBest: false
  },
  {
    id: 6,
    name: 'ТопЗайм',
    logo: '⭐',
    rate: '0%',
    amount: '5 000 - 25 000 ₽',
    term: '10 - 45 дней',
    rating: 4.9,
    reviews: 5120,
    features: ['Первый займ бесплатно', 'Проверенная МФО', 'Быстрое одобрение'],
    isNew: false,
    isBest: true
  }
];

const articles = [
  {
    slug: 'kak-vzyat-pervyj-zajm-pod-0',
    title: 'Как взять первый займ под 0%',
    category: 'Инструкции',
    readTime: '5 мин'
  },
  {
    slug: 'chem-otlichaetsya-zajm-ot-kredita',
    title: 'Чем отличается займ от кредита',
    category: 'Полезное',
    readTime: '7 мин'
  },
  {
    slug: 'sposoby-pogasheniya-zajma',
    title: 'Все способы погашения микрозайма',
    category: 'Инструкции',
    readTime: '8 мин'
  },
  {
    slug: 'kreditnaya-istoriya',
    title: 'Что такое кредитная история',
    category: 'Финансы',
    readTime: '9 мин'
  }
];

const Index = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showCookieNotice, setShowCookieNotice] = useState(true);
  const [activeTab, setActiveTab] = useState('all');
  const [quizStep, setQuizStep] = useState(1);
  const [quizAnswers, setQuizAnswers] = useState({
    amount: '',
    term: '',
    history: '',
    speed: ''
  });

  const handleQuizAnswer = (field: string, value: string) => {
    setQuizAnswers({ ...quizAnswers, [field]: value });
    if (quizStep < 4) {
      setQuizStep(quizStep + 1);
    }
  };

  return (
    <div className="min-h-screen">
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl md:text-3xl">💸</span>
              <h1 className="text-xl md:text-2xl font-bold text-primary">DreamЗайм</h1>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#catalog" className="text-foreground hover:text-primary transition-colors">Каталог МФО</a>
              <a href="#rating" className="text-foreground hover:text-primary transition-colors">Рейтинг</a>
              <a href="#articles" className="text-foreground hover:text-primary transition-colors">Статьи</a>
              <a href="#quiz" className="text-foreground hover:text-primary transition-colors">Подбор займа</a>
            </nav>
            <Button size="sm" onClick={() => {
              setIsChatOpen(true);
              setQuizStep(1);
            }}>
              <Icon name="MessageCircle" className="md:mr-2" size={18} />
              <span className="hidden md:inline">Написать</span>
            </Button>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-secondary text-white px-4 py-1 text-sm">
              🔥 Займы через Госуслуги и Т-Банк ID
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Микрозаймы онлайн
              <br />
              <span className="text-primary">без отказа</span>
            </h1>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Подберём лучший микрозайм за 2 минуты. Первый займ под 0%. 
              Оформление через Госуслуги и Т-Банк ID. Одобрение 98%, деньги на карту за 5 минут круглосуточно.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="text-lg px-8 hover-scale" onClick={() => {
                setActiveTab('all');
                setTimeout(() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' }), 100);
              }}>
                <Icon name="Sparkles" className="mr-2" size={20} />
                Подобрать займ бесплатно
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => {
                setActiveTab('best');
                setTimeout(() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' }), 100);
              }}>
                <Icon name="TrendingUp" className="mr-2" size={20} />
                Посмотреть рейтинг
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">0%</div>
                <div className="text-sm text-muted-foreground mt-1">Первый займ</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5 мин</div>
                <div className="text-sm text-muted-foreground mt-1">На карту</div>
              </div>
              <div className="text-center">
                <div className="text-3xl">🏛️</div>
                <div className="text-sm text-muted-foreground mt-1">Госуслуги</div>
              </div>
              <div className="text-center">
                <div className="text-3xl">🏦</div>
                <div className="text-sm text-muted-foreground mt-1">Т-Банк ID</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="quiz" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {!showQuiz ? (
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold mb-4">Умный подбор займа</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ответьте на 4 вопроса, и мы подберём оптимальное предложение для вас
              </p>
              <Button size="lg" onClick={() => {
                setIsChatOpen(true);
                setQuizStep(1);
              }}>
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Начать подбор
              </Button>
            </div>
          ) : (
            <Card className="max-w-2xl mx-auto shadow-lg">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-2xl">Умный подбор займа</CardTitle>
                  <Button variant="ghost" size="sm" onClick={() => setShowQuiz(false)}>
                    <Icon name="X" size={20} />
                  </Button>
                </div>
                <CardDescription>Шаг {quizStep} из 4</CardDescription>
                <div className="w-full bg-muted h-2 rounded-full mt-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${(quizStep / 4) * 100}%` }}
                  />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {quizStep === 1 && (
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Какую сумму хотите взять?</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {['До 5 000 ₽', '5 000 - 15 000 ₽', '15 000 - 30 000 ₽', 'Более 30 000 ₽'].map((option) => (
                        <Button
                          key={option}
                          variant="outline"
                          className="h-auto py-4 hover:bg-primary hover:text-white transition-all"
                          onClick={() => handleQuizAnswer('amount', option)}
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
                {quizStep === 2 && (
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">На какой срок нужен займ?</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {['До 7 дней', '7 - 30 дней', '1 - 3 месяца', 'Более 3 месяцев'].map((option) => (
                        <Button
                          key={option}
                          variant="outline"
                          className="h-auto py-4 hover:bg-primary hover:text-white transition-all"
                          onClick={() => handleQuizAnswer('term', option)}
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
                {quizStep === 3 && (
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Состояние кредитной истории</h3>
                    <div className="grid grid-cols-1 gap-3">
                      {['Хорошая', 'Средняя', 'Плохая', 'Не знаю / нет'].map((option) => (
                        <Button
                          key={option}
                          variant="outline"
                          className="h-auto py-4 justify-start hover:bg-primary hover:text-white transition-all"
                          onClick={() => handleQuizAnswer('history', option)}
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
                {quizStep === 4 && (
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Как срочно нужны деньги?</h3>
                    <div className="grid grid-cols-1 gap-3">
                      {['Прямо сейчас', 'Сегодня', 'В течение недели', 'Не срочно'].map((option) => (
                        <Button
                          key={option}
                          variant="outline"
                          className="h-auto py-4 justify-start hover:bg-primary hover:text-white transition-all"
                          onClick={() => handleQuizAnswer('speed', option)}
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Каталог МФО</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выбирайте из проверенных микрофинансовых организаций с лучшими условиями
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="all">Все МФО</TabsTrigger>
              <TabsTrigger value="best">Лучшие</TabsTrigger>
              <TabsTrigger value="new">Новые</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-4">
              {mfoData.map((mfo) => (
                <Card key={mfo.id} className="hover:shadow-lg transition-all hover-scale">
                  <CardContent className="p-4 md:p-6">
                    <div className="grid md:grid-cols-12 gap-4 md:gap-6">
                      <div className="md:col-span-3 flex items-center gap-3 md:gap-4">
                        <div className="text-4xl md:text-5xl">{mfo.logo}</div>
                        <div>
                          <div className="flex flex-wrap items-center gap-1 md:gap-2 mb-1">
                            <h3 className="font-bold text-base md:text-lg">{mfo.name}</h3>
                            {mfo.isNew && <Badge variant="secondary" className="text-xs">Новая</Badge>}
                            {mfo.isBest && <Badge className="bg-primary text-xs">ТОП</Badge>}
                          </div>
                          <div className="flex items-center gap-1 text-sm">
                            <Icon name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                            <span className="font-semibold">{mfo.rating}</span>
                            <span className="text-muted-foreground">({mfo.reviews})</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="md:col-span-5 grid grid-cols-3 gap-2 md:gap-4 text-center md:text-left">
                        <div>
                          <div className="text-xl md:text-2xl font-bold text-primary">{mfo.rate}</div>
                          <div className="text-xs text-muted-foreground">Ставка</div>
                        </div>
                        <div>
                          <div className="text-xs md:text-sm font-semibold">{mfo.amount}</div>
                          <div className="text-xs text-muted-foreground">Сумма</div>
                        </div>
                        <div>
                          <div className="text-xs md:text-sm font-semibold">{mfo.term}</div>
                          <div className="text-xs text-muted-foreground">Срок</div>
                        </div>
                      </div>
                      
                      <div className="md:col-span-4">
                        <div className="flex flex-wrap gap-1 md:gap-2 mb-3">
                          {mfo.features.map((feature, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                        <Button className="w-full" size="lg">
                          <Icon name="ExternalLink" className="mr-2" size={18} />
                          <span className="hidden sm:inline">Оформить займ</span>
                          <span className="sm:hidden">Оформить</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="best" className="space-y-4">
              {mfoData.filter(mfo => mfo.isBest).map((mfo) => (
                <Card key={mfo.id} className="hover:shadow-lg transition-all hover-scale">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-12 gap-6 items-center">
                      <div className="md:col-span-3 flex items-center gap-4">
                        <div className="text-5xl">{mfo.logo}</div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold text-lg">{mfo.name}</h3>
                            <Badge className="bg-primary">ТОП</Badge>
                          </div>
                          <div className="flex items-center gap-1 text-sm">
                            <Icon name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                            <span className="font-semibold">{mfo.rating}</span>
                            <span className="text-muted-foreground">({mfo.reviews})</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="md:col-span-5 grid grid-cols-3 gap-4 text-center md:text-left">
                        <div>
                          <div className="text-2xl font-bold text-primary">{mfo.rate}</div>
                          <div className="text-xs text-muted-foreground">Ставка в день</div>
                        </div>
                        <div>
                          <div className="text-sm font-semibold">{mfo.amount}</div>
                          <div className="text-xs text-muted-foreground">Сумма займа</div>
                        </div>
                        <div>
                          <div className="text-sm font-semibold">{mfo.term}</div>
                          <div className="text-xs text-muted-foreground">Срок займа</div>
                        </div>
                      </div>
                      
                      <div className="md:col-span-4">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {mfo.features.map((feature, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                        <Button className="w-full" size="lg">
                          <Icon name="ExternalLink" className="mr-2" size={18} />
                          Оформить займ
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="new" className="space-y-4">
              {mfoData.filter(mfo => mfo.isNew).map((mfo) => (
                <Card key={mfo.id} className="hover:shadow-lg transition-all hover-scale">
                  <CardContent className="p-4 md:p-6">
                    <div className="grid md:grid-cols-12 gap-4 md:gap-6">
                      <div className="md:col-span-3 flex items-center gap-3 md:gap-4">
                        <div className="text-4xl md:text-5xl">{mfo.logo}</div>
                        <div>
                          <div className="flex flex-wrap items-center gap-1 md:gap-2 mb-1">
                            <h3 className="font-bold text-base md:text-lg">{mfo.name}</h3>
                            <Badge variant="secondary" className="text-xs">Новая</Badge>
                          </div>
                          <div className="flex items-center gap-1 text-sm">
                            <Icon name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                            <span className="font-semibold">{mfo.rating}</span>
                            <span className="text-muted-foreground">({mfo.reviews})</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="md:col-span-5 grid grid-cols-3 gap-2 md:gap-4 text-center md:text-left">
                        <div>
                          <div className="text-xl md:text-2xl font-bold text-primary">{mfo.rate}</div>
                          <div className="text-xs text-muted-foreground">Ставка</div>
                        </div>
                        <div>
                          <div className="text-xs md:text-sm font-semibold">{mfo.amount}</div>
                          <div className="text-xs text-muted-foreground">Сумма</div>
                        </div>
                        <div>
                          <div className="text-xs md:text-sm font-semibold">{mfo.term}</div>
                          <div className="text-xs text-muted-foreground">Срок</div>
                        </div>
                      </div>
                      
                      <div className="md:col-span-4">
                        <div className="flex flex-wrap gap-1 md:gap-2 mb-3">
                          {mfo.features.map((feature, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                        <Button className="w-full" size="lg">
                          <Icon name="ExternalLink" className="mr-2" size={18} />
                          <span className="hidden sm:inline">Оформить займ</span>
                          <span className="sm:hidden">Оформить</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="rating" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Рейтинг лучших МФО</h2>
            <p className="text-base md:text-lg text-muted-foreground">
              По отзывам пользователей и условиям займа
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {mfoData
              .sort((a, b) => b.rating - a.rating)
              .slice(0, 5)
              .map((mfo, index) => (
                <Card key={mfo.id} className="hover:shadow-lg transition-all">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-center gap-3 md:gap-6">
                      <div className="text-2xl md:text-4xl font-bold text-primary w-8 md:w-16 text-center flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="text-3xl md:text-5xl flex-shrink-0">{mfo.logo}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-1 md:gap-2 mb-1 md:mb-2">
                          <h3 className="font-bold text-base md:text-xl">{mfo.name}</h3>
                          {mfo.isBest && <Badge className="bg-primary text-xs">ТОП</Badge>}
                        </div>
                        <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm">
                          <div className="flex items-center gap-1">
                            <Icon name="Star" className="text-yellow-500 fill-yellow-500" size={14} />
                            <span className="font-semibold text-sm md:text-lg">{mfo.rating}</span>
                          </div>
                          <span className="text-muted-foreground hidden sm:inline">{mfo.reviews} отзывов</span>
                          <span className="text-primary font-semibold">{mfo.rate}</span>
                        </div>
                      </div>
                      <Button size="sm" className="flex-shrink-0">
                        <span className="hidden sm:inline">Оформить</span>
                        <Icon name="ExternalLink" className="sm:hidden" size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      <section id="articles" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Полезные статьи</h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Всё о микрозаймах и кредитной истории
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {articles.map((article, index) => (
              <Link key={index} to={`/articles/${article.slug}`}>
                <Card className="hover:shadow-lg transition-all hover-scale cursor-pointer h-full">
                  <CardHeader>
                    <Badge className="w-fit mb-2">{article.category}</Badge>
                    <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Icon name="Clock" className="mr-1" size={14} />
                      {article.readTime}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">Остались вопросы?</h2>
          <p className="text-base md:text-xl mb-6 md:mb-8 opacity-90">
            Свяжитесь с нами любым удобным способом
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-base md:text-lg px-6 md:px-8">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Онлайн-чат
            </Button>
            <Button size="lg" variant="outline" className="text-base md:text-lg px-6 md:px-8 bg-white/10 hover:bg-white/20 text-white border-white">
              <Icon name="Mail" className="mr-2" size={20} />
              Написать email
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">💸</span>
                <h3 className="text-xl font-bold">DreamЗайм</h3>
              </div>
              <p className="text-sm text-muted-foreground">Информационный сервис</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">МФО</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Все МФО</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Лучшие МФО</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Новые МФО</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">С 0% ставкой</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Статьи</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Рейтинг МФО</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">О сервисе</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Свяжитесь с нами</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"></li>
                <li className="flex items-center gap-2">dreamzaim@mail.ru</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center">
            <p className="text-xs text-muted-foreground mb-3 max-w-4xl mx-auto leading-relaxed">
              Данный сайт — витрина/информационный сервис. Мы не являемся кредитором и не принимаем решения по выдаче займов. Окончательные условия и документы размещены на сайтах соответствующих МФО. Оценивайте финансовые возможности и риски. 18+.
            </p>
            <p className="text-xs text-muted-foreground mb-3" data-nosnippet>
              Контакты: ИП Кагачёв И.С. ИНН 510204469048, Телефон: +79260898731
            </p>
            <p className="text-sm text-muted-foreground">
              © 2026 DreamЗайм. Все права защищены.
            </p>
          </div>
        </div>
      </footer>

      {isChatOpen && (
        <div className="fixed bottom-4 right-4 left-4 md:left-auto md:bottom-6 md:right-6 z-50 w-auto md:w-96 shadow-2xl rounded-lg overflow-hidden animate-in slide-in-from-bottom-5">
          <Card className="border-2">
            <CardHeader className="bg-primary text-white p-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                    👤
                  </div>
                  <div>
                    <CardTitle className="text-lg">Олег</CardTitle>
                    <p className="text-xs text-white/80">Помощник по подбору займа</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20" onClick={() => {
                  setIsChatOpen(false);
                  setQuizStep(1);
                }}>
                  <Icon name="X" size={20} />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-4 space-y-4 bg-muted/30 max-h-96 overflow-y-auto">
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <p className="text-sm">Привет! Я Олег, помогу подобрать оптимальный займ.</p>
              </div>
              <div className="w-full bg-muted h-1.5 rounded-full">
                <div 
                  className="bg-primary h-1.5 rounded-full transition-all duration-300" 
                  style={{ width: `${(quizStep / 4) * 100}%` }}
                />
              </div>
              {quizStep === 1 && (
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-sm font-semibold">Какую сумму хотите взять?</p>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {['До 5 000 ₽', '5 000 - 15 000 ₽', '15 000 - 30 000 ₽', 'Более 30 000 ₽'].map((option) => (
                      <Button
                        key={option}
                        variant="outline"
                        size="sm"
                        className="justify-start hover:bg-primary hover:text-white transition-all"
                        onClick={() => handleQuizAnswer('amount', option)}
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
              {quizStep === 2 && (
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-sm font-semibold">На какой срок нужен займ?</p>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {['До 7 дней', '7 - 30 дней', '1 - 3 месяца', 'Более 3 месяцев'].map((option) => (
                      <Button
                        key={option}
                        variant="outline"
                        size="sm"
                        className="justify-start hover:bg-primary hover:text-white transition-all"
                        onClick={() => handleQuizAnswer('term', option)}
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
              {quizStep === 3 && (
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-sm font-semibold">Состояние кредитной истории</p>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {['Хорошая', 'Средняя', 'Плохая', 'Не знаю / нет'].map((option) => (
                      <Button
                        key={option}
                        variant="outline"
                        size="sm"
                        className="justify-start hover:bg-primary hover:text-white transition-all"
                        onClick={() => handleQuizAnswer('history', option)}
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
              {quizStep === 4 && (
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-sm font-semibold">Как срочно нужны деньги?</p>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {['Прямо сейчас', 'Сегодня', 'В течение недели', 'Не срочно'].map((option) => (
                      <Button
                        key={option}
                        variant="outline"
                        size="sm"
                        className="justify-start hover:bg-primary hover:text-white transition-all"
                        onClick={() => handleQuizAnswer('speed', option)}
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {showCookieNotice && (
        <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:bottom-6 z-40 max-w-sm bg-white shadow-lg rounded-lg border p-2 animate-in slide-in-from-bottom-5">
          <div className="flex items-center gap-2">
            <div className="text-xl">🍪</div>
            <div className="flex-1">
              <p className="text-xs text-muted-foreground">
                Мы используем cookie для улучшения работы сайта.
              </p>
            </div>
            <Button size="sm" className="h-7 text-xs px-3" onClick={() => setShowCookieNotice(false)}>
              Принять
            </Button>
            <Button variant="ghost" size="sm" className="h-7 w-7 p-0" onClick={() => setShowCookieNotice(false)}>
              <Icon name="X" size={14} />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;