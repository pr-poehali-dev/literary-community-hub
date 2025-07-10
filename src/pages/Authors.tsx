import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Authors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("all");
  const [selectedGenre, setSelectedGenre] = useState("all");

  const authors = [
    {
      id: 1,
      name: "Анна Петрова",
      avatar: "/api/placeholder/64/64",
      city: "Москва",
      age: 28,
      rating: 4.8,
      followers: 1240,
      works: 45,
      genres: ["Поэзия", "Лирика"],
      awards: ["Золотое перо", "Лучший автор месяца"],
      lastWork: "Осенние размышления",
      joinDate: "2022-03-15",
      description: "Пишу о красоте обычных моментов жизни",
    },
    {
      id: 2,
      name: "Михаил Иванов",
      avatar: "/api/placeholder/64/64",
      city: "Санкт-Петербург",
      age: 35,
      rating: 4.6,
      followers: 987,
      works: 32,
      genres: ["Проза", "Рассказы"],
      awards: ["Серебряная звезда"],
      lastWork: "Дорога домой",
      joinDate: "2021-11-20",
      description: "Исследую человеческие отношения через призму прозы",
    },
    {
      id: 3,
      name: "Елена Смирнова",
      avatar: "/api/placeholder/64/64",
      city: "Екатеринбург",
      age: 31,
      rating: 4.9,
      followers: 1456,
      works: 67,
      genres: ["Поэзия", "Философская лирика"],
      awards: ["Платиновое перо", "Автор года", "Лучший поэт"],
      lastWork: "Звёздная ночь",
      joinDate: "2020-07-10",
      description: "Ищу глубину в простых словах",
    },
    {
      id: 4,
      name: "Дмитрий Коваль",
      avatar: "/api/placeholder/64/64",
      city: "Новосибирск",
      age: 42,
      rating: 4.7,
      followers: 823,
      works: 28,
      genres: ["Проза", "Мемуары"],
      awards: ["Золотая звезда"],
      lastWork: "Воспоминания",
      joinDate: "2021-05-03",
      description: "Делюсь историями жизни",
    },
    {
      id: 5,
      name: "Ольга Васильева",
      avatar: "/api/placeholder/64/64",
      city: "Казань",
      age: 26,
      rating: 4.5,
      followers: 672,
      works: 39,
      genres: ["Поэзия", "Романтика"],
      awards: ["Серебряное перо"],
      lastWork: "Весенний сад",
      joinDate: "2022-09-12",
      description: "Воспеваю красоту природы и любви",
    },
    {
      id: 6,
      name: "Алексей Морозов",
      avatar: "/api/placeholder/64/64",
      city: "Красноярск",
      age: 39,
      rating: 4.8,
      followers: 1134,
      works: 52,
      genres: ["Проза", "Приключения"],
      awards: ["Золотое перо", "Лучший прозаик"],
      lastWork: "Путешествие",
      joinDate: "2020-12-01",
      description: "Люблю рассказывать истории о путешествиях",
    },
  ];

  const filteredAuthors = authors.filter((author) => {
    const matchesSearch =
      author.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      author.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity = selectedCity === "all" || author.city === selectedCity;
    const matchesGenre =
      selectedGenre === "all" || author.genres.includes(selectedGenre);
    return matchesSearch && matchesCity && matchesGenre;
  });

  const topAuthors = authors.sort((a, b) => b.rating - a.rating).slice(0, 3);

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
              <a
                href="/works"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Произведения
              </a>
              <a
                href="/contests"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Конкурсы
              </a>
              <a href="/authors" className="text-primary font-medium">
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
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Наши авторы</h1>
          <p className="text-muted-foreground">
            Познакомьтесь с талантливыми писателями нашего сообщества
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="all">Все авторы</TabsTrigger>
            <TabsTrigger value="top">Топ авторов</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
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
                        placeholder="Имя автора..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label>Город</Label>
                      <Select
                        value={selectedCity}
                        onValueChange={setSelectedCity}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Все города</SelectItem>
                          <SelectItem value="Москва">Москва</SelectItem>
                          <SelectItem value="Санкт-Петербург">
                            Санкт-Петербург
                          </SelectItem>
                          <SelectItem value="Екатеринбург">
                            Екатеринбург
                          </SelectItem>
                          <SelectItem value="Новосибирск">
                            Новосибирск
                          </SelectItem>
                          <SelectItem value="Казань">Казань</SelectItem>
                          <SelectItem value="Красноярск">Красноярск</SelectItem>
                        </SelectContent>
                      </Select>
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
                          <SelectItem value="Лирика">Лирика</SelectItem>
                          <SelectItem value="Рассказы">Рассказы</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Authors Grid */}
              <div className="lg:col-span-3">
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredAuthors.map((author) => (
                    <Card
                      key={author.id}
                      className="hover:shadow-lg transition-shadow cursor-pointer"
                    >
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <Avatar className="w-16 h-16">
                            <AvatarImage
                              src={author.avatar}
                              alt={author.name}
                            />
                            <AvatarFallback>
                              {author.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <CardTitle className="text-lg">
                              {author.name}
                            </CardTitle>
                            <CardDescription>
                              {author.city}, {author.age} лет
                            </CardDescription>
                            <div className="flex items-center gap-2 mt-2">
                              <Icon
                                name="Star"
                                size={16}
                                className="text-yellow-500"
                              />
                              <span className="text-sm font-medium">
                                {author.rating}
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          {author.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {author.genres.map((genre, index) => (
                            <Badge key={index} variant="secondary">
                              {genre}
                            </Badge>
                          ))}
                        </div>

                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="font-semibold">{author.works}</div>
                            <div className="text-xs text-muted-foreground">
                              Произведений
                            </div>
                          </div>
                          <div>
                            <div className="font-semibold">
                              {author.followers}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Читателей
                            </div>
                          </div>
                          <div>
                            <div className="font-semibold">
                              {author.awards.length}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Наград
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="text-sm">
                            <span className="text-muted-foreground">
                              Последняя работа:
                            </span>
                            <span className="font-medium ml-1">
                              {author.lastWork}
                            </span>
                          </div>
                          <div className="text-sm">
                            <span className="text-muted-foreground">
                              В сообществе с:
                            </span>
                            <span className="ml-1">{author.joinDate}</span>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1"
                          >
                            <Icon name="BookOpen" size={16} className="mr-1" />
                            Произведения
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1"
                          >
                            <Icon name="UserPlus" size={16} className="mr-1" />
                            Подписаться
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="top" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {topAuthors.map((author, index) => (
                <Card
                  key={author.id}
                  className="hover:shadow-lg transition-shadow relative"
                >
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Avatar className="w-20 h-20">
                        <AvatarImage src={author.avatar} alt={author.name} />
                        <AvatarFallback>
                          {author.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <CardTitle className="text-xl">{author.name}</CardTitle>
                        <CardDescription>
                          {author.city}, {author.age} лет
                        </CardDescription>
                        <div className="flex items-center gap-2 mt-2">
                          <Icon
                            name="Star"
                            size={18}
                            className="text-yellow-500"
                          />
                          <span className="text-lg font-bold">
                            {author.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {author.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {author.awards.map((award, awardIndex) => (
                        <Badge
                          key={awardIndex}
                          variant="default"
                          className="bg-yellow-500 hover:bg-yellow-600"
                        >
                          <Icon name="Award" size={12} className="mr-1" />
                          {award}
                        </Badge>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="font-semibold text-lg">
                          {author.works}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Произведений
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold text-lg">
                          {author.followers}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Читателей
                        </div>
                      </div>
                    </div>

                    <Button className="w-full">
                      <Icon name="Crown" size={16} className="mr-2" />
                      Посмотреть профиль
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Authors;
