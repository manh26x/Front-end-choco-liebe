pipeline {
    agent any

    stages {
        stage('Deploy') {
            when {
              expression {
                currentBuild.result == null || currentBuild.result == 'SUCCESS' 
              }
            }
            steps {
                sh 'cp -r /var/lib/jenkins/workspace/Front-end-choco-liebe_master/*/. target/jmeter_results/'
 archive (includes: 'pkg/*.gem')

  // publish html
  // snippet generator doesn't include "target:"
  // https://issues.jenkins.io/browse/JENKINS-29711.
  publishHTML (target: [
      allowMissing: false,
      alwaysLinkToLastBuild: false,
      keepAll: true,
      reportDir: 'coverage',
      reportFiles: 'index.html',
      reportName: "RCov Report"
    ])
            }
        }
    }
}
