
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { Trophy, Flame, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-[#1A1F2C] to-[#6E59A5] text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Ставки на киберспорт</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Делайте ставки на ваши любимые киберспортивные команды и турниры. 
              Получайте максимум от захватывающих сражений в мире киберспорта!
            </p>
            <Link to="/cybersport">
              <Button size="lg" className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white">
                Начать сейчас
              </Button>
            </Link>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-[#9b87f5]/20">
                <CardHeader>
                  <Trophy className="h-12 w-12 text-[#9b87f5] mb-4" />
                  <CardTitle>Широкий выбор дисциплин</CardTitle>
                  <CardDescription>Dota 2, CS:GO, League of Legends и многое другое</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Мы предлагаем ставки на все популярные киберспортивные дисциплины с регулярным обновлением коэффициентов.</p>
                </CardContent>
              </Card>
              
              <Card className="border-[#9b87f5]/20">
                <CardHeader>
                  <Flame className="h-12 w-12 text-[#9b87f5] mb-4" />
                  <CardTitle>Выгодные коэффициенты</CardTitle>
                  <CardDescription>Конкурентные условия для максимальной выгоды</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Наши аналитики работают круглосуточно, чтобы предложить вам самые выгодные коэффициенты на рынке.</p>
                </CardContent>
              </Card>
              
              <Card className="border-[#9b87f5]/20">
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-[#9b87f5] mb-4" />
                  <CardTitle>Статистика и аналитика</CardTitle>
                  <CardDescription>Профессиональные прогнозы и статистика матчей</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Получите доступ к детальной статистике команд и игроков для принятия информированных решений.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-[#1A1F2C] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2023 КиберСтавки. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
