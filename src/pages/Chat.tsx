import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [selectedRoom, setSelectedRoom] = useState("general");

  const chatRooms = [
    {
      id: "general",
      name: "Общий чат",
      description: "Общение на любые темы",
      members: 1240,
      online: 89,
    },
    {
      id: "poetry",
      name: "Поэзия",
      description: "Обсуждение поэтических произведений",
      members: 456,
      online: 23,
    },
    {
      id: "prose",
      name: "Проза",
      description: "Разговоры о прозе и рассказах",
      members: 332,
      online: 18,
    },
    {
      id: "contests",
      name: "Конкурсы",
      description: "Обсуждение конкурсов и результатов",
      members: 789,
      online: 45,
    },
    {
      id: "newbies",
      name: "Новички",
      description: "Помощь начинающим авторам",
      members: 234,
      online: 12,
    },
    {
      id: "feedback",
      name: "Обратная связь",
      description: "Рецензии и критика произведений",
      members: 567,
      online: 34,
    },
  ];

  const messages = [
    {
      id: 1,
      author: "Анна Петрова",
      avatar: "/api/placeholder/40/40",
      message:
        "Добро пожаловать в общий чат! Давайте обсуждать литературу и делиться впечатлениями.",
      time: "10:30",
      isOnline: true,
    },
    {
      id: 2,
      author: "Михаил Иванов",
      avatar: "/api/placeholder/40/40",
      message:
        'Кто-нибудь читал последние работы из конкурса "Зимняя сказка"? Очень впечатляющие произведения!',
      time: "10:32",
      isOnline: true,
    },
    {
      id: 3,
      author: "Елена Смирнова",
      avatar: "/api/placeholder/40/40",
      message:
        'Да, особенно понравилось стихотворение "Снежный вальс". Очень красивые образы.',
      time: "10:35",
      isOnline: false,
    },
    {
      id: 4,
      author: "Дмитрий Коваль",
      avatar: "/api/placeholder/40/40",
      message:
        "А я сейчас работаю над новым рассказом. Тема - детские воспоминания. Кто-то может дать совет?",
      time: "10:38",
      isOnline: true,
    },
    {
      id: 5,
      author: "Ольга Васильева",
      avatar: "/api/placeholder/40/40",
      message:
        "Дмитрий, главное - искренность. Когда пишешь о детстве, важно передать те эмоции, которые сам переживал.",
      time: "10:40",
      isOnline: true,
    },
  ];

  const onlineUsers = [
    {
      name: "Анна Петрова",
      avatar: "/api/placeholder/32/32",
      status: "Пишет новое стихотворение",
    },
    {
      name: "Михаил Иванов",
      avatar: "/api/placeholder/32/32",
      status: "Читает произведения",
    },
    {
      name: "Дмитрий Коваль",
      avatar: "/api/placeholder/32/32",
      status: "Работает над рассказом",
    },
    {
      name: "Ольга Васильева",
      avatar: "/api/placeholder/32/32",
      status: "Онлайн",
    },
    {
      name: "Алексей Морозов",
      avatar: "/api/placeholder/32/32",
      status: "Участвует в конкурсе",
    },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("Отправка сообщения:", message);
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

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
              <a href="/chat" className="text-primary font-medium">
                Чат
              </a>
            </nav>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                Профиль
              </Button>
              <Button variant="outline" size="sm">
                Выйти
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Общение</h1>
          <p className="text-muted-foreground">
            Общайтесь с другими авторами и обсуждайте литературу
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
          {/* Chat Rooms */}
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Комнаты чата</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px]">
                  <div className="space-y-3">
                    {chatRooms.map((room) => (
                      <div
                        key={room.id}
                        onClick={() => setSelectedRoom(room.id)}
                        className={`p-3 rounded-lg cursor-pointer transition-colors ${
                          selectedRoom === room.id
                            ? "bg-primary/10 border-2 border-primary/20"
                            : "bg-muted/30 hover:bg-muted/50"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium">{room.name}</h4>
                          <Badge variant="secondary" className="text-xs">
                            {room.online}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {room.description}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Icon name="Users" size={12} />
                          <span>{room.members} участников</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Chat Messages */}
          <div className="lg:col-span-2">
            <Card className="h-full flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>
                    {chatRooms.find((room) => room.id === selectedRoom)?.name ||
                      "Общий чат"}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">
                      <Icon name="Users" size={12} className="mr-1" />
                      {chatRooms.find((room) => room.id === selectedRoom)
                        ?.online || 0}{" "}
                      онлайн
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ScrollArea className="flex-1 mb-4">
                  <div className="space-y-4">
                    {messages.map((msg) => (
                      <div key={msg.id} className="flex items-start gap-3">
                        <div className="relative">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src={msg.avatar} alt={msg.author} />
                            <AvatarFallback>
                              {msg.author
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          {msg.isOnline && (
                            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium">{msg.author}</span>
                            <span className="text-xs text-muted-foreground">
                              {msg.time}
                            </span>
                          </div>
                          <p className="text-sm">{msg.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>

                <div className="flex gap-2">
                  <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Напишите сообщение..."
                    className="resize-none"
                    rows={2}
                  />
                  <Button onClick={handleSendMessage} className="self-end">
                    <Icon name="Send" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Online Users */}
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Онлайн ({onlineUsers.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px]">
                  <div className="space-y-3">
                    {onlineUsers.map((user, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/30 cursor-pointer"
                      >
                        <div className="relative">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={user.avatar} alt={user.name} />
                            <AvatarFallback className="text-xs">
                              {user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border border-white"></div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">
                            {user.name}
                          </p>
                          <p className="text-xs text-muted-foreground truncate">
                            {user.status}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
