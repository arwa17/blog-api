import { Controller, Post, Body, Get } from '@nestjs/common';
import { ArticlesService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { Article } from './entities/article.entity';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  create(@Body() createArticleDto: CreateArticleDto): Promise<Article> {
    return this.articlesService.createArticle(createArticleDto);
  }

  @Get()
  findAll(): Promise<Article[]> {
    return this.articlesService.findAll();
  }
}
