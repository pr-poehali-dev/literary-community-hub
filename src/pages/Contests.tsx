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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import Icon from "@/components/ui/icon";

const Contests = () => {
  const activeContests = [
    {
      id: 1,
      title: "Зимняя сказка",
      description: "Напишите рассказ или стихотворение на тему зимы",
      prize: "10,000 руб + публикация",
      deadline: "2024-12-31",
      participants: 156,
      maxParticipants: 200,
      category: "Поэзия и проза",
      status: "active",
    },
    {
      id: 2,
      title: "Экспресс-конкурс: Новогодние мечты",
      description:
        "Короткое стихотворение о новогодних мечтах (не более 8 строк)",
      prize: "3,000 руб",
      deadline: "2024-12-25",
      participants: 89,
      maxParticipants: 100,
      category: "Экспресс",
      status: "active",
    },
    {
      id: 3,
      title: "Память поколений",
      description: "Произведение о связи поколений и семейных традициях",
      prize: "15,000 руб + издание в альманахе",
      deadline: "2025-01-15",
      participants: 67,
      maxParticipants: 150,
      category: "Проза",
      status: "active",
    },
  ];

  const completedContests = [
    {
      id: 4,
      title: "Осенние мотивы",
      description: "Поэтический конкурс осенней тематики",
      prize: "8,000 руб",
      winner: "Анна Петрова",
      winnerWork: "Золотая осень",
      participants: 145,
      completedDate: "2024-11-30",
      category: "Поэзия",
    },
    {
      id: 5,
      title: "Короткие истории",
      description: "Рассказы объемом не более 5000 символов",
      prize: "12,000 руб",
      winner: "Михаил Иванов",
      winnerWork: "Случай в метро",
      participants: 98,
      completedDate: "2024-11-15",
      category: "Проза",
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
              <a href="/contests" className="text-primary font-medium">
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
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Литературные конкурсы</h1>
          <p className="text-muted-foreground">
            Покажите свой талант и получите признание
          </p>
        </div>

        <Tabs defaultValue="active" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="active">Активные конкурсы</TabsTrigger>
            <TabsTrigger value="completed">Завершённые</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeContests.map((contest) => (
                <Card
                  key={contest.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <CardTitle className="text-lg">
                          {contest.title}
                        </CardTitle>
                        <Badge
                          variant={
                            contest.category === "Экспресс"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {contest.category}
                        </Badge>
                      </div>
                      <Badge variant="outline" className="text-green-600">
                        Активен
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription>{contest.description}</CardDescription>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Icon
                          name="Trophy"
                          size={16}
                          className="text-yellow-500"
                        />
                        <span className="font-medium">{contest.prize}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon
                          name="Calendar"
                          size={16}
                          className="text-muted-foreground"
                        />
                        <span className="text-sm">До {contest.deadline}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon
                          name="Users"
                          size={16}
                          className="text-muted-foreground"
                        />
                        <span className="text-sm">
                          {contest.participants} участников
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Участников</span>
                        <span>
                          {contest.participants}/{contest.maxParticipants}
                        </span>
                      </div>
                      <Progress
                        value={
                          (contest.participants / contest.maxParticipants) * 100
                        }
                      />
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full">
                          <Icon name="Send" className="mr-2" size={16} />
                          Участвовать
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>
                            Участие в конкурсе: {contest.title}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="work-title">
                              Название произведения
                            </Label>
                            <Input
                              id="work-title"
                              placeholder="Введите название"
                            />
                          </div>
                          <div>
                            <Label htmlFor="work-content">
                              Текст произведения
                            </Label>
                            <Textarea
                              id="work-content"
                              placeholder="Введите текст вашего произведения..."
                              className="min-h-[200px]"
                            />
                          </div>
                          <div>
                            <Label htmlFor="work-comment">
                              Комментарий (необязательно)
                            </Label>
                            <Textarea
                              id="work-comment"
                              placeholder="Расскажите о вашем произведении..."
                              className="min-h-[100px]"
                            />
                          </div>
                          <div className="flex gap-2">
                            <Button className="flex-1">
                              Отправить на конкурс
                            </Button>
                            <Button variant="outline" className="flex-1">
                              Сохранить черновик
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {completedContests.map((contest) => (
                <Card
                  key={contest.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <CardTitle className="text-lg">
                          {contest.title}
                        </CardTitle>
                        <Badge variant="secondary">{contest.category}</Badge>
                      </div>
                      <Badge variant="outline" className="text-gray-600">
                        Завершён
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription>{contest.description}</CardDescription>

                    <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon
                          name="Crown"
                          size={20}
                          className="text-yellow-600"
                        />
                        <span className="font-semibold text-yellow-800 dark:text-yellow-200">
                          Победитель
                        </span>
                      </div>
                      <p className="font-medium">{contest.winner}</p>
                      <p className="text-sm text-muted-foreground">
                        «{contest.winnerWork}»
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Icon
                          name="Trophy"
                          size={16}
                          className="text-yellow-500"
                        />
                        <span className="font-medium">{contest.prize}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon
                          name="Calendar"
                          size={16}
                          className="text-muted-foreground"
                        />
                        <span className="text-sm">
                          Завершён {contest.completedDate}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon
                          name="Users"
                          size={16}
                          className="text-muted-foreground"
                        />
                        <span className="text-sm">
                          {contest.participants} участников
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1">
                        <Icon name="BookOpen" className="mr-2" size={16} />
                        Читать работы
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Icon name="Award" className="mr-2" size={16} />
                        Результаты
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

export default Contests;
