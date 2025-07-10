import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Works = () => {
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const works = [
    {
      id: 1,
      title: "Осенние размышления",
      author: "Анна Петрова",
      genre: "Поэзия",
      rating: 4.8,
      views: 1240,
      date: "2024-12-15",
      excerpt: "Листья кружатся в танце золотом...",
    },
    {
      id: 2,
      title: "Дорога домой",
      author: "Михаил Иванов",
      genre: "Проза",
      rating: 4.6,
      views: 987,
      date: "2024-12-14",
      excerpt: "Долгий путь через заснеженные поля...",
    },
    {
      id: 3,
      title: "Звёздная ночь",
      author: "Елена Смирнова",
      genre: "Поэзия",
      rating: 4.9,
      views: 1456,
      date: "2024-12-13",
      excerpt: "Небо усыпано бриллиантами...",
    },
    {
      id: 4,
      title: "Воспоминания",
      author: "Дмитрий Коваль",
      genre: "Проза",
      rating: 4.7,
      views: 823,
      date: "2024-12-12",
      excerpt: "В старом доме пахло прошлым...",
    },
    {
      id: 5,
      title: "Весенний сад",
      author: "Ольга Васильева",
      genre: "Поэзия",
      rating: 4.5,
      views: 672,
      date: "2024-12-11",
      excerpt: "Цветы распускаются навстречу солнцу...",
    },
    {
      id: 6,
      title: "Путешествие",
      author: "Алексей Морозов",
      genre: "Проза",
      rating: 4.8,
      views: 1134,
      date: "2024-12-10",
      excerpt: "Дорога манила неизведанными тропами...",
    },
  ];

  const filteredWorks = works.filter((work) => {
    const matchesGenre =
      selectedGenre === "all" || work.genre === selectedGenre;
    const matchesSearch =
      work.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      work.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesGenre && matchesSearch;
  });

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
                href="/"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Главная
              </a>
              <a href="/works" className="text-primary font-medium">
                Произведения
              </a>
              <a
                href="/contests"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Конкурсы
              </a>
              <a
                href="/authors"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Авторы
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

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Произведения</h1>
            <p className="text-muted-foreground">
              Откройте для себя удивительные работы наших авторов
            </p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="Plus" className="mr-2" size={20} />
                Добавить произведение
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Новое произведение</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Название</Label>
                  <Input
                    id="title"
                    placeholder="Введите название произведения"
                  />
                </div>
                <div>
                  <Label htmlFor="genre">Жанр</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите жанр" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="poetry">Поэзия</SelectItem>
                      <SelectItem value="prose">Проза</SelectItem>
                      <SelectItem value="drama">Драма</SelectItem>
                      <SelectItem value="essay">Эссе</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="content">Текст произведения</Label>
                  <Textarea
                    id="content"
                    placeholder="Введите текст вашего произведения..."
                    className="min-h-[200px]"
                  />
                </div>
                <div>
                  <Label htmlFor="description">Краткое описание</Label>
                  <Textarea
                    id="description"
                    placeholder="Опишите кратко суть произведения..."
                    className="min-h-[100px]"
                  />
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1">Опубликовать</Button>
                  <Button variant="outline" className="flex-1">
                    Сохранить черновик
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Фильтры</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Поиск</Label>
                  <Input
                    placeholder="Поиск по названию или автору..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div>
                  <Label>Жанр</Label>
                  <Select
                    value={selectedGenre}
                    onValueChange={setSelectedGenre}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все жанры</SelectItem>
                      <SelectItem value="Поэзия">Поэзия</SelectItem>
                      <SelectItem value="Проза">Проза</SelectItem>
                      <SelectItem value="Драма">Драма</SelectItem>
                      <SelectItem value="Эссе">Эссе</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Сортировка</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="По дате" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="date">По дате</SelectItem>
                      <SelectItem value="rating">По рейтингу</SelectItem>
                      <SelectItem value="views">По просмотрам</SelectItem>
                      <SelectItem value="title">По названию</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Works Grid */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 gap-6">
              {filteredWorks.map((work) => (
                <Card
                  key={work.id}
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
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {work.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Icon
                            name="Star"
                            size={16}
                            className="text-yellow-500"
                          />
                          <span className="text-sm font-medium">
                            {work.rating}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon
                            name="Eye"
                            size={16}
                            className="text-muted-foreground"
                          />
                          <span className="text-sm text-muted-foreground">
                            {work.views}
                          </span>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {work.date}
                      </span>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Icon name="BookOpen" size={16} className="mr-1" />
                        Читать
                      </Button>
                      <Button size="sm" variant="outline">
                        <Icon name="Heart" size={16} />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Icon name="MessageCircle" size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
