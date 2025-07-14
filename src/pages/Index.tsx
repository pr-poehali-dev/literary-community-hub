import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="BookOpen" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-primary">
                Писатели за добро
              </h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Альманахи
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Произведения
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Конкурсы
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Новости
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Контакты
              </a>
            </nav>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                Войти
              </Button>
              <Button size="sm">Регистрация</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                Литературная платформа
              </Badge>
              <h1 className="text-5xl font-bold leading-tight">
                Место для <span className="text-primary">творчества</span> и{" "}
                <span className="text-primary">вдохновения</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Сообщество авторов, где каждый может поделиться своими
                произведениями, участвовать в конкурсах и получать обратную
                связь от единомышленников.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="PenTool" className="mr-2" size={20} />
                  Начать писать
                </Button>
                <Button variant="outline" size="lg">
                  <Icon name="BookOpen" className="mr-2" size={20} />
                  Читать произведения
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border">
                <img
                  src="/img/60a0a63d-a3ae-4fb2-b70e-2c6854657104.jpg"
                  alt="Литературная платформа"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Возможности платформы</h2>
            <p className="text-xl text-muted-foreground">
              Всё необходимое для творческого развития
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon
                  name="FileText"
                  size={48}
                  className="text-primary mx-auto mb-4"
                />
                <CardTitle>Публикация произведений</CardTitle>
                <CardDescription>
                  Делитесь своими стихами и прозой с читателями
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Загружайте свои работы, получайте отзывы и развивайте свой
                  талант
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon
                  name="Trophy"
                  size={48}
                  className="text-primary mx-auto mb-4"
                />
                <CardTitle>Конкурсы</CardTitle>
                <CardDescription>
                  Участвуйте в литературных состязаниях
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Обычные конкурсы и экспресс-турниры для писателей всех уровней
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon
                  name="Users"
                  size={48}
                  className="text-primary mx-auto mb-4"
                />
                <CardTitle>Сообщество</CardTitle>
                <CardDescription>Общайтесь с единомышленниками</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Чат, комментарии, рецензии и обмен опытом с другими авторами
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">1,240</div>
              <p className="text-muted-foreground">Авторов</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">8,567</div>
              <p className="text-muted-foreground">Произведений</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">156</div>
              <p className="text-muted-foreground">Конкурсов</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">24</div>
              <p className="text-muted-foreground">Альманаха</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Works */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Новые произведения</h2>
            <p className="text-xl text-muted-foreground">
              Свежие работы наших авторов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Осенние размышления",
                author: "Анна Петрова",
                genre: "Поэзия",
                rating: 4.8,
              },
              {
                title: "Дорога домой",
                author: "Михаил Иванов",
                genre: "Проза",
                rating: 4.6,
              },
              {
                title: "Звёздная ночь",
                author: "Елена Смирнова",
                genre: "Поэзия",
                rating: 4.9,
              },
              {
                title: "Воспоминания",
                author: "Дмитрий Коваль",
                genre: "Проза",
                rating: 4.7,
              },
              {
                title: "Весенний сад",
                author: "Ольга Васильева",
                genre: "Поэзия",
                rating: 4.5,
              },
              {
                title: "Путешествие",
                author: "Алексей Морозов",
                genre: "Проза",
                rating: 4.8,
              },
            ].map((work, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <CardTitle className="text-lg">{work.title}</CardTitle>
                      <CardDescription>Автор: {work.author}</CardDescription>
                    </div>
                    <Badge variant="secondary">{work.genre}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Icon name="Star" size={16} className="text-yellow-500" />
                    <span className="text-sm font-medium">{work.rating}</span>
                    <span className="text-sm text-muted-foreground">
                      • 12 отзывов
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card/80 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Icon name="BookOpen" size={24} className="text-primary" />
                <span className="font-bold">Писатели за добро</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Литературная платформа для творческих людей
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Разделы</h4>
              <div className="space-y-2 text-sm">
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Произведения
                </a>
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Конкурсы
                </a>
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Альманахи
                </a>
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Рецензии
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Сообщество</h4>
              <div className="space-y-2 text-sm">
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Чат
                </a>
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Пользователи
                </a>
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Статьи
                </a>
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Практикумы
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Информация</h4>
              <div className="space-y-2 text-sm">
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  О проекте
                </a>
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Правила
                </a>
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Контакты
                </a>
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Конфиденциальность
                </a>
              </div>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="text-center text-sm text-muted-foreground">
            © 2024 Писатели за добро. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
