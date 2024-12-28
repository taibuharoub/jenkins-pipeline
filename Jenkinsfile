


pipeline {
    agent any
    

    environment {
        SCANNER_HOME = tool 'sonar-scanner'
        SONAR_TOKEN = credentials('SONAR_TOKEN')
        SONAR_ORGANIZATION = 'target-technology'
        SONAR_PROJECT_KEY = 'target-technology_jenkins'
    }

    stages {
        
//         stage('Code-Analysis') {
//             steps {
//                 withSonarQubeEnv('SonarCloud') {
//                     sh '''$SCANNER_HOME/bin/sonar-scanner \
//   -Dsonar.organization=target-technology \
//   -Dsonar.projectKey=target-technology_jenkins \
//   -Dsonar.sources=. \
//   -Dsonar.host.url=https://sonarcloud.io '''
//                 }
//             }
//         }
       
        
      
       stage('Docker Build And Push') {
            steps {
                script {
                    docker.withRegistry('', 'docker-cred') {
                        def buildNumber = env.BUILD_NUMBER ?: '1'
                        def image = docker.build("ty100/devops-project-2:latest")
                        image.push()
                    }
                }
            }
        }
    
       
        stage('Deploy To EC2') {
            steps {
                script {
                        sh 'docker rm -f $(docker ps -q) || true'
                        sh 'docker run -d -p 3000:3000 ty100/devops-project-2:latest'
                        
                    
                }
            }
        }
        
}
}
