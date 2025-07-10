import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
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

const Almanacs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");

  const publishedAlmanacs = [
    {
      id: 1,
      title: "Осенние голоса",
      description: "Сборник лучших поэтических произведений осени 2024",
      year: "2024",
      authors: 24,
      works: 67,
      pages: 156,
      downloads: 2340,
      rating: 4.8,
      cover: "/api/placeholder/200/280",
      price: "Бесплатно",
      format: ["PDF", "EPUB"],
      category: "Поэзия",
      releaseDate: "2024-11-15",
    },
    {
      id: 2,
      title: "Рассказы о жизни",
      description: "Прозаические произведения о человеческих судьбах",
      year: "2024",
      authors: 18,
      works: 45,
      pages: 234,
      downloads: 1890,
      rating: 4.6,
      cover: "/api/placeholder/200/280",
      price: "299 руб",
      format: ["PDF", "EPUB", "Печать"],
      category: "Проза",
      releaseDate: "2024-09-20",
    },
    {
      id: 3,
      title: "Весенние мечты",
      description: "Сборник произведений о надежде и обновлении",
      year: "2024",
      authors: 31,
      works: 89,
      pages: 198,
      downloads: 3200,
      rating: 4.9,
      cover: "/api/placeholder/200/280",
      price: "Бесплатно",
      format: ["PDF", "EPUB"],
      category: "Смешанный",
      releaseDate: "2024-04-10",
    },
    {
      id: 4,
      title: "Зимние узоры",
      description: "Поэтические произведения о красоте зимы",
      year: "2023",
      authors: 22,
      works: 56,
      pages: 167,
      downloads: 1567,
      rating: 4.7,
      cover: "/api/placeholder/200/280",
      price: "199 руб",
      format: ["PDF", "EPUB"],
      category: "Поэзия",
      releaseDate: "2023-12-01",
    },
  ];

  const upcomingAlmanacs = [
    {
      id: 5,
      title: "Новогодние истории",
      description: "Сборник рассказов и стихов о новогодних чудесах",
      year: "2025",
      targetAuthors: 30,
      currentAuthors: 18,
      targetWorks: 80,
      currentWorks: 45,
      estimatedPages: 220,
      category: "Смешанный",
      deadline: "2024-12-31",
      releaseDate: "2025-01-15",
    },
    {
      id: 6,
      title: "Любовь и дружба",
      description: "Произведения о человеческих отношениях",
      year: "2025",
      targetAuthors: 25,
      currentAuthors: 12,
      targetWorks: 60,
      currentWorks: 28,
      estimatedPages: 180,
      category: "Проза",
      deadline: "2025-02-14",
      releaseDate: "2025-03-01",
    },
  ];

  const filteredAlmanacs = publishedAlmanacs.filter((almanac) => {
    const matchesSearch =
      almanac.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      almanac.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = selectedYear === "all" || almanac.year === selectedYear;
    return matchesSearch && matchesYear;
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
              <a href="/almanacs" className="text-primary font-medium">
                Альманахи
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
          <h1 className="text-4xl font-bold mb-2">Альманахи</h1>
          <p className="text-muted-foreground">
            Сборники лучших произведений нашего сообщества
          </p>
        </div>

        <Tabs defaultValue="published" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="published">Опубликованные</TabsTrigger>
            <TabsTrigger value="upcoming">Готовятся к выпуску</TabsTrigger>
          </TabsList>

          <TabsContent value="published" className="space-y-6">
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
                        placeholder="Название альманаха..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label>Год выпуска</Label>
                      <Select
                        value={selectedYear}
                        onValueChange={setSelectedYear}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Все годы</SelectItem>
                          <SelectItem value="2024">2024</SelectItem>
                          <SelectItem value="2023">2023</SelectItem>
                          <SelectItem value="2022">2022</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Жанр</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Все жанры" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Все жанры</SelectItem>
                          <SelectItem value="poetry">Поэзия</SelectItem>
                          <SelectItem value="prose">Проза</SelectItem>
                          <SelectItem value="mixed">Смешанный</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Almanacs Grid */}
              <div className="lg:col-span-3">
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredAlmanacs.map((almanac) => (
                    <Card
                      key={almanac.id}
                      className="hover:shadow-lg transition-shadow"
                    >
                      <CardHeader>
                        <div className="flex gap-4">
                          <div className="w-20 h-28 bg-gradient-to-b from-primary/20 to-primary/40 rounded-lg flex items-center justify-center">
                            <Icon
                              name="Book"
                              size={32}
                              className="text-primary"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <CardTitle className="text-lg">
                                  {almanac.title}
                                </CardTitle>
                                <CardDescription>
                                  {almanac.year}
                                </CardDescription>
                              </div>
                              <Badge variant="secondary">
                                {almanac.category}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                              <Icon
                                name="Star"
                                size={16}
                                className="text-yellow-500"
                              />
                              <span className="text-sm font-medium">
                                {almanac.rating}
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          {almanac.description}
                        </p>

                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="font-semibold">
                              {almanac.authors}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Авторов
                            </div>
                          </div>
                          <div>
                            <div className="font-semibold">{almanac.works}</div>
                            <div className="text-xs text-muted-foreground">
                              Произведений
                            </div>
                          </div>
                          <div>
                            <div className="font-semibold">{almanac.pages}</div>
                            <div className="text-xs text-muted-foreground">
                              Страниц
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Icon
                              name="Download"
                              size={16}
                              className="text-muted-foreground"
                            />
                            <span className="text-sm">
                              {almanac.downloads} скачиваний
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Icon
                              name="Calendar"
                              size={16}
                              className="text-muted-foreground"
                            />
                            <span className="text-sm">
                              Выпущен {almanac.releaseDate}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Icon
                              name="Tag"
                              size={16}
                              className="text-muted-foreground"
                            />
                            <span className="text-sm font-medium">
                              {almanac.price}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {almanac.format.map((format, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-xs"
                            >
                              {format}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1">
                            <Icon name="Download" size={16} className="mr-1" />
                            Скачать
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1"
                          >
                            <Icon name="Eye" size={16} className="mr-1" />
                            Просмотр
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="upcoming" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {upcomingAlmanacs.map((almanac) => (
                <Card
                  key={almanac.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">
                          {almanac.title}
                        </CardTitle>
                        <CardDescription>
                          Выпуск планируется на {almanac.releaseDate}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="text-orange-600">
                        В разработке
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {almanac.description}
                    </p>

                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Авторы</span>
                          <span>
                            {almanac.currentAuthors}/{almanac.targetAuthors}
                          </span>
                        </div>
                        <Progress
                          value={
                            (almanac.currentAuthors / almanac.targetAuthors) *
                            100
                          }
                        />
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Произведения</span>
                          <span>
                            {almanac.currentWorks}/{almanac.targetWorks}
                          </span>
                        </div>
                        <Progress
                          value={
                            (almanac.currentWorks / almanac.targetWorks) * 100
                          }
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Icon
                          name="Calendar"
                          size={16}
                          className="text-muted-foreground"
                        />
                        <span className="text-sm">
                          Дедлайн: {almanac.deadline}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon
                          name="FileText"
                          size={16}
                          className="text-muted-foreground"
                        />
                        <span className="text-sm">
                          Примерно {almanac.estimatedPages} страниц
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon
                          name="Tag"
                          size={16}
                          className="text-muted-foreground"
                        />
                        <span className="text-sm">{almanac.category}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <Icon name="Send" size={16} className="mr-1" />
                        Подать заявку
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Icon name="Info" size={16} className="mr-1" />
                        Подробнее
                      </Button>
                    </div>
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

export default Almanacs;
