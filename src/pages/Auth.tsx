import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Имитация запроса
    setTimeout(() => {
      setIsLoading(false);
      console.log("Вход выполнен");
    }, 1000);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Имитация запроса
    setTimeout(() => {
      setIsLoading(false);
      console.log("Регистрация выполнена");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="BookOpen" size={40} className="text-primary" />
            <h1 className="text-3xl font-bold text-primary">
              Писатели за добро
            </h1>
          </div>
          <p className="text-muted-foreground">
            Присоединяйтесь к сообществу авторов
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-center">Добро пожаловать</CardTitle>
            <CardDescription className="text-center">
              Войдите в свой аккаунт или создайте новый
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Вход</TabsTrigger>
                <TabsTrigger value="register">Регистрация</TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="space-y-4">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Пароль</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Введите пароль"
                      required
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="remember" />
                      <Label htmlFor="remember" className="text-sm">
                        Запомнить меня
                      </Label>
                    </div>
                    <Button variant="link" size="sm" className="px-0">
                      Забыли пароль?
                    </Button>
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Icon
                          name="Loader2"
                          className="mr-2 h-4 w-4 animate-spin"
                        />
                        Вход...
                      </>
                    ) : (
                      <>
                        <Icon name="LogIn" className="mr-2 h-4 w-4" />
                        Войти
                      </>
                    )}
                  </Button>
                </form>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      Или войдите через
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" size="sm">
                    <Icon name="Mail" className="mr-2 h-4 w-4" />
                    Google
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="Github" className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="register" className="space-y-4">
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Имя</Label>
                      <Input id="firstName" placeholder="Ваше имя" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Фамилия</Label>
                      <Input
                        id="lastName"
                        placeholder="Ваша фамилия"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="regEmail">Email</Label>
                    <Input
                      id="regEmail"
                      type="email"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="regPassword">Пароль</Label>
                    <Input
                      id="regPassword"
                      type="password"
                      placeholder="Создайте пароль"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">
                      Подтверждение пароля
                    </Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Повторите пароль"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">Город</Label>
                      <Input id="city" placeholder="Ваш город" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="age">Возраст</Label>
                      <Input
                        id="age"
                        type="number"
                        placeholder="Ваш возраст"
                        min="13"
                        max="120"
                      />
                    </div>
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
                        <SelectItem value="fiction">Фантастика</SelectItem>
                        <SelectItem value="romance">Романтика</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">О себе</Label>
                    <Textarea
                      id="bio"
                      placeholder="Расскажите немного о себе и своих творческих интересах..."
                      className="min-h-[80px]"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" required />
                    <Label htmlFor="terms" className="text-sm">
                      Я согласен с{" "}
                      <Button variant="link" size="sm" className="p-0 h-auto">
                        правилами сайта
                      </Button>{" "}
                      и{" "}
                      <Button variant="link" size="sm" className="p-0 h-auto">
                        политикой конфиденциальности
                      </Button>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" />
                    <Label htmlFor="newsletter" className="text-sm">
                      Хочу получать новости о конкурсах и мероприятиях
                    </Label>
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Icon
                          name="Loader2"
                          className="mr-2 h-4 w-4 animate-spin"
                        />
                        Создание аккаунта...
                      </>
                    ) : (
                      <>
                        <Icon name="UserPlus" className="mr-2 h-4 w-4" />
                        Создать аккаунт
                      </>
                    )}
                  </Button>
                </form>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      Или зарегистрируйтесь через
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" size="sm">
                    <Icon name="Mail" className="mr-2 h-4 w-4" />
                    Google
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="Github" className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            Нужна помощь?{" "}
            <Button variant="link" size="sm" className="p-0 h-auto">
              Свяжитесь с нами
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
