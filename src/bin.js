#!/usr/bin/env node

const program = require('commander')
const chalk = require('chalk')
const ora = require('ora')

// 版本信息
program
  .version(require('../package').version)
  .usage('<command> [options]')

program.option('-F, --framework', '指定创建项目的框架，目前仅支持vue2.x，')

program
  .command('init <project>')
  .description('初始化模板')
  .option('--pc', '基于vue-element-admin的后台管理系统')
  .option('--h5', 'vue全家桶、vant-ui、vw适配、公众号适配')
  .action((project, option) => {
    const type = Object.keys(option)[0]
    switch (type) {
      case 'pc':
        console.log(chalk.yellow('pc管理后台模板'))
        break
      case 'h5':
        console.log(chalk.yellow('h5模板'))
        break
    }
  })

program
  .command('list')
  .description('查看所有可用模板')
  .action(() => {
    const spinner = ora('fetching template list...').start()
    console.log('')
    console.log('1. ')
    console.log('2. ')
    console.log('')
    spinner.succeed('成功')
  })

program
  .parse(process.argv)