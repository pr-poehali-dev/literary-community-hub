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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Profile = () => {
  const userProfile = {
    name: "Анна Петрова",
    avatar: "/api/placeholder/128/128",
    city: "Москва",
    age: 28,
    email: "anna.petrova@example.com",
    phone: "+7 (999) 123-45-67",
    rating: 4.8,
    followers: 1240,
    following: 456,
    works: 45,
    genres: ["Поэзия", "Лирика"],
    awards: ["Золотое перо", "Лучший автор месяца", "Серебряная звезда"],
    joinDate: "2022-03-15",
    description:
      "Пишу о красоте обычных моментов жизни. Верю, что поэзия может изменить мир к лучшему.",
    achievements: [
      {
        title: "Первая публикация",
        date: "2022-03-20",
        description: "Опубликовано первое произведение",
      },
      {
        title: "100 читателей",
        date: "2022-05-10",
        description: "Набрано 100 подписчиков",
      },
      {
        title: "Победитель конкурса",
        date: "2022-08-15",
        description: "Первое место в конкурсе 'Летние мотивы'",
      },
      {
        title: "Золотое перо",
        date: "2023-01-10",
        description: "Получена награда 'Золотое перо'",
      },
    ],
  };

  const recentWorks = [
    {
      id: 1,
      title: "Осенние размышления",
      genre: "Поэзия",
      rating: 4.9,
      views: 1240,
      date: "2024-12-15",
    },
    {
      id: 2,
      title: "Тихий вечер",
      genre: "Лирика",
      rating: 4.7,
      views: 892,
      date: "2024-12-10",
    },
    {
      id: 3,
      title: "Воспоминания детства",
      genre: "Поэзия",
      rating: 4.8,
      views: 1156,
      date: "2024-12-05",
    },
  ];

  const activities = [
    {
      type: "work",
      title: "Опубликовано произведение 'Осенние размышления'",
      date: "2024-12-15",
      time: "14:30",
    },
    {
      type: "comment",
      title: "Оставлен комментарий к произведению 'Зимняя сказка'",
      date: "2024-12-14",
      time: "09:15",
    },
    {
      type: "follow",
      title: "Подписка на автора Михаил Иванов",
      date: "2024-12-13",
      time: "16:45",
    },
    {
      type: "award",
      title: "Получена награда 'Лучший автор месяца'",
      date: "2024-12-12",
      time: "10:00",
    },
  ];

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
              <a
                href="/authors"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Авторы
              </a>
            </nav>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Icon name="Settings" size={16} className="mr-1" />
                Настройки
              </Button>
              <Button variant="outline" size="sm">
                Выйти
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col items-center md:items-start">
                  <Avatar className="w-32 h-32 mb-4">
                    <AvatarImage
                      src={userProfile.avatar}
                      alt={userProfile.name}
                    />
                    <AvatarFallback className="text-2xl">
                      {userProfile.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <Button variant="outline" size="sm">
                    <Icon name="Camera" size={16} className="mr-2" />
                    Изменить фото
                  </Button>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h1 className="text-3xl font-bold">{userProfile.name}</h1>
                      <p className="text-muted-foreground">
                        {userProfile.city}, {userProfile.age} лет
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Star" size={20} className="text-yellow-500" />
                      <span className="text-xl font-bold">
                        {userProfile.rating}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {userProfile.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {userProfile.genres.map((genre, index) => (
                      <Badge key={index} variant="secondary">
                        {genre}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="font-bold text-2xl">
                        {userProfile.works}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Произведений
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-2xl">
                        {userProfile.followers}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Читателей
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-2xl">
                        {userProfile.following}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Подписок
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-2xl">
                        {userProfile.awards.length}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Наград
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="works" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="works">Мои произведения</TabsTrigger>
            <TabsTrigger value="activity">Активность</TabsTrigger>
            <TabsTrigger value="awards">Награды</TabsTrigger>
            <TabsTrigger value="followers">Подписчики</TabsTrigger>
            <TabsTrigger value="settings">Настройки</TabsTrigger>
          </TabsList>

          <TabsContent value="works" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Мои произведения</h2>
              <Button>
                <Icon name="Plus" className="mr-2" size={16} />
                Добавить произведение
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentWorks.map((work) => (
                <Card
                  key={work.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{work.title}</CardTitle>
                        <CardDescription>{work.date}</CardDescription>
                      </div>
                      <Badge variant="secondary">{work.genre}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
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
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Icon name="Edit" size={16} className="mr-1" />
                        Редактировать
                      </Button>
                      <Button size="sm" variant="outline">
                        <Icon name="MoreHorizontal" size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <h2 className="text-2xl font-bold">Активность</h2>

            <div className="space-y-4">
              {activities.map((activity, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon
                          name={
                            activity.type === "work"
                              ? "FileText"
                              : activity.type === "comment"
                                ? "MessageCircle"
                                : activity.type === "follow"
                                  ? "UserPlus"
                                  : "Award"
                          }
                          size={16}
                          className="text-primary"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{activity.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {activity.date} в {activity.time}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="awards" className="space-y-6">
            <h2 className="text-2xl font-bold">Награды и достижения</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Награды</CardTitle>
                  <CardDescription>
                    Полученные за достижения в литературе
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {userProfile.awards.map((award, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg"
                      >
                        <Icon
                          name="Award"
                          size={20}
                          className="text-yellow-600"
                        />
                        <span className="font-medium">{award}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Достижения</CardTitle>
                  <CardDescription>
                    Важные вехи в творческом пути
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userProfile.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                        <div>
                          <p className="font-medium">{achievement.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {achievement.description}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {achievement.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="followers" className="space-y-6">
            <h2 className="text-2xl font-bold">Подписчики и подписки</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Мои читатели ({userProfile.followers})</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[1, 2, 3, 4, 5].map((follower) => (
                      <div key={follower} className="flex items-center gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback>U{follower}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="font-medium">Пользователь {follower}</p>
                          <p className="text-sm text-muted-foreground">
                            Подписан 2 дня назад
                          </p>
                        </div>
                        <Button size="sm" variant="outline">
                          <Icon name="MessageCircle" size={16} />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Мои подписки ({userProfile.following})</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[1, 2, 3, 4, 5].map((following) => (
                      <div key={following} className="flex items-center gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback>A{following}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="font-medium">Автор {following}</p>
                          <p className="text-sm text-muted-foreground">
                            Подписан 1 неделю назад
                          </p>
                        </div>
                        <Button size="sm" variant="outline">
                          <Icon name="UserMinus" size={16} />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <h2 className="text-2xl font-bold">Настройки профиля</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Основная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" defaultValue={userProfile.name} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue={userProfile.email}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" defaultValue={userProfile.phone} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">Город</Label>
                    <Input id="city" defaultValue={userProfile.city} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="age">Возраст</Label>
                    <Input
                      id="age"
                      type="number"
                      defaultValue={userProfile.age}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Творческий профиль</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="description">О себе</Label>
                    <Textarea
                      id="description"
                      defaultValue={userProfile.description}
                      className="min-h-[100px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="genres">Любимые жанры</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите жанры" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="poetry">Поэзия</SelectItem>
                        <SelectItem value="prose">Проза</SelectItem>
                        <SelectItem value="drama">Драма</SelectItem>
                        <SelectItem value="essay">Эссе</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Separator />
                  <div className="space-y-4">
                    <h4 className="font-medium">Настройки приватности</h4>
                    <div className="space-y-2">
                      <Label>Показывать email в профиле</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Только мне" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="private">Только мне</SelectItem>
                          <SelectItem value="friends">Друзьям</SelectItem>
                          <SelectItem value="public">Всем</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex gap-4">
              <Button>Сохранить изменения</Button>
              <Button variant="outline">Отменить</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
